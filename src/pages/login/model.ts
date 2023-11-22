import { createField } from "@/shared/lib/form/createField";
import {
  createEvent,
  createStore,
  combine,
  sample,
  createEffect,
} from "effector";
import { navigate } from "wouter/use-location";
import * as loginMutation from "@/shared/api/mutation";
import { not } from "patronum";
import { ROUTES } from "@/shared/styles/routes";

// region Ports
export const formSubmit = createEvent();
export const pageOpen = createEvent();

export const $formDisabled = createStore(false);
export const $formPending = createStore(false);

export const [$email, emailChanged, $emailError] = createField("");
export const [$password, passwordChanged, $passwordError] = createField("");
// endregion

const $form = combine({ email: $email, password: $password });
const $isFormEmpty = $form.map(
  ({ email, password }) =>
    email.trim().length === 0 || password.trim().length === 0
);

sample({
  clock: formSubmit,
  filter: not($isFormEmpty),
  source: $form,
  target: loginMutation.loginUserFx,
});

const loginError = createEvent();

sample({
  clock: loginMutation.loginUserFx.doneData,
  filter: (result) => !result?.ok,
  target: loginError,
});

const loginSuccessFx = createEffect(() => {
  navigate(ROUTES.root);
});

sample({
  clock: loginMutation.loginUserFx.doneData,
  filter: (result) => !!result?.ok,
  target: loginSuccessFx,
});
