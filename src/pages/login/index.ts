export { LoginPage as default } from "./login.page";
import { contract } from "@/shared/lib/contract";
import * as page from "./login.page";
import * as model from "./model";
import { ChangeEvent } from "react";

contract({
  page,
  model: {
    ...model,
    emailChanged: model.emailChanged.prepend(getValue),
    passwordChanged: model.passwordChanged.prepend(getValue),
    formSubmit: model.formSubmit.prepend(noop),
  },
});

function getValue(event: ChangeEvent<HTMLInputElement>): string {
  return event.currentTarget.value;
}

function noop(): void {}
