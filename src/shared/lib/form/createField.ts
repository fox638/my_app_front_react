import { createEvent, createStore } from "effector";

export const createField = <Value>(defaultValue: Value) => {
  const $value = createStore(defaultValue);
  const $error = createStore<Nullable<ErrorType>>(null);
  const set = createEvent<Value>();
  $value.on(set, (_, value: Value) => value);
  $error.on(set, () => "");
  return [$value, set, $error] as const;
};
