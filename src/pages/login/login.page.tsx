import { createEvent, createStore } from "effector";
import React, { ChangeEvent, useEffect } from "react";
import * as classes from "./login.page.css";
import { reflect } from "@effector/reflect";
import { Box } from "@/shared/ui/Box";
import { TextInput } from "@/shared/ui/TextInput";
import { Button } from "@/shared/ui/Button";
import { useEvent } from "effector-react";

interface LoginPageProps {}

// region Ports
export const formSubmit = createEvent<React.FormEvent<HTMLFormElement>>();
export const emailChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const passwordChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const pageOpen = createEvent();
export const $email = createStore("");
export const $emailError = createStore<Nullable<ErrorType>>("");
export const $password = createStore("");
export const $passwordError = createStore<Nullable<ErrorType>>("");
export const $formDisabled = createStore(false);
export const $formPending = createStore(false);
// endregion

export const LoginPage: React.FC<LoginPageProps> = () => {
  const pageOpenEvent = useEvent(pageOpen);
  useEffect(() => {
    pageOpenEvent();
  }, [pageOpenEvent]);
  return (
    <div className={classes.container}>
      <Form className={classes.formContainer}>
        <EmailField />
        <PasswordField />
        <SubmitButton fullWidth mt="3rem" />
      </Form>
    </div>
  );
};

export default LoginPage;

const Form = reflect({
  view: Box,
  bind: {
    as: "form",
    onSubmit: formSubmit,
    withBorder: true,
  },
});

formSubmit.watch((e) => e.preventDefault());

const EmailField = reflect({
  view: TextInput,
  bind: {
    label: "Email",
    id: "email",
    onChange: emailChanged,
    value: $email,
    error: $emailError,
  },
});

const PasswordField = reflect({
  view: TextInput,
  bind: {
    label: "Password",
    id: "password",
    type: "password",
    onChange: passwordChanged,
    value: $password,
    error: $passwordError,
  },
});

const SubmitButton = reflect({
  view: Button,
  bind: {
    variant: "primary",
    disabled: $formDisabled,
    children: "Submit",
  },
});
