/* eslint-disable @typescript-eslint/no-explicit-any */
import { Unit, forward, is } from "effector";

type KeysOfEffectorApi<API> = {
  [KEY in keyof API]: API[KEY] extends Unit<any> ? KEY : never;
}[keyof API];

export function contract<
  Properties extends string,
  Page extends Record<Properties, unknown>
>(config: { page: Page; model: Pick<Page, KeysOfEffectorApi<Page>> }) {
  for (const name in config.page) {
    const pageUnit = config.page[name];

    const modelUnit = (config.model as Page)[name];

    if (pageUnit && modelUnit && is.unit(pageUnit) && is.unit(modelUnit)) {
      if (is.store(pageUnit) && is.store(modelUnit)) {
        forward({ from: modelUnit, to: pageUnit });

        pageUnit.defaultState = modelUnit.defaultState;

        (pageUnit as any).stateRef.current = (
          modelUnit as any
        ).stateRef.current;

        (pageUnit as any).stateRef.before = [
          {
            type: "map",
            fn: (state: unknown) => state,
            from: (modelUnit as any).stateRef,
          },
        ];
      } else {
        forward({ from: pageUnit, to: modelUnit });
      }
    }
  }
}
