import { attach, createEffect, createEvent, forward, sample } from "effector";
import { createGate } from "effector-react";
import * as mutation from "@/shared/api/mutation";
import toast from "react-hot-toast";
import { HookReturnValue, LocationHook } from "wouter/use-location";
import { createField } from "@/shared/lib/form/createField";
import { AuthSignUpResponse } from "@/shared/api/gql/graphql";
import { ROUTES } from "@/shared/styles/routes";
import { reset } from "patronum";

export const registrationFx = attach({
  effect: mutation.registrationFx,
});

const showUnknownErrorFx = createEffect(() => toast.error("Unknown Error"));
const showMessageErrorFx = createEffect(
  (message?: Nullable<string>) => message && toast.error(message)
);

type RegistrationPageGateType = {
  setLocation: HookReturnValue<LocationHook>[1];
};

export const RegistrationPageGate = createGate<RegistrationPageGateType>();
const pageMounted = RegistrationPageGate.open;

const redirectLoginFx = createEffect(() => {
  const gate = RegistrationPageGate.state.getState();
  gate.setLocation(ROUTES.login);
});

export const [$email, emailChanged, $emailError] = createField<string>("");

export const [$password, passwordChange, $passwordError] =
  createField<string>("");

export const [$username, usernameChange, $usernameError] =
  createField<string>("");

reset({
  clock: pageMounted,
  target: [$email, $emailError, $password, $passwordError],
});

export const registrationFormSubmitted = createEvent();

sample({
  clock: registrationFormSubmitted,
  source: { email: $email, password: $password, username: $username },
  target: registrationFx,
});

// handle catch error
const registrationError = createEvent<AuthSignUpResponse | undefined>();

sample({
  clock: registrationFx.doneData,
  filter: (result) => !result?.ok,
  target: registrationError,
});

const emailErrorEvent = registrationError.filterMap((resp) =>
  resp?.errors?.find(
    (error) => error?.__typename === "FormError" && error.fieldName === "email"
  )
);
const usernameErrorEvent = registrationError.filterMap((resp) =>
  resp?.errors?.find(
    (error) =>
      error?.__typename === "FormError" && error.fieldName === "username"
  )
);

const passwordErrorEvent = registrationError.filterMap((resp) =>
  resp?.errors?.find(
    (error) =>
      error?.__typename === "FormError" && error.fieldName === "password"
  )
);

const messageErrorEvent = registrationError.filterMap(
  (resp) =>
    resp?.errors?.find((error) => error?.__typename === "ErrorMessage")?.message
);

$emailError.on(emailErrorEvent, (_, error) => error?.message);
$usernameError.on(usernameErrorEvent, (_, error) => error?.message);
$passwordError.on(passwordErrorEvent, (_, error) => error?.message);

forward({
  from: messageErrorEvent,
  to: showMessageErrorFx,
});

// handle unknown error
sample({
  clock: registrationFx.failData,
  target: showUnknownErrorFx,
});

// handle success
sample({
  clock: registrationFx.doneData,
  filter: (resp) => !!resp?.ok,
  target: redirectLoginFx,
});
