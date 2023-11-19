import React, { FormEvent } from "react";
import * as classes from "./registration.page.css";
import { Box } from "@/shared/ui/Box";
import { Typography } from "@/shared/ui/Typography";
import TextInput from "@/shared/ui/TextInput/TextInput";
import { Button } from "@/shared/ui/Button";
import useEvent from "@/shared/lib/hook/useEvent";
import * as model from "./model";
import { useLocation } from "wouter";
import { useGate } from "effector-react";
import { reflect } from "@effector/reflect";

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const [_, setLocation] = useLocation();

  useGate(model.RegistrationPageGate, {
    setLocation,
  });

  const handleFormSubmit = useEvent((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    model.registrationFormSubmitted();
  });

  return (
    <div className={classes.container}>
      <Box
        className={classes.formContainer}
        withBorder
        as="form"
        onSubmit={handleFormSubmit}
      >
        <Typography as="h2" variant="h1" textAlign="center">
          Registration
        </Typography>

        <UsernameField />
        <EmailField />
        <PasswordField />

        <Button fullWidth mt="3rem" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default RegistrationPage;

const UsernameField = reflect({
  view: TextInput,
  bind: {
    label: "Username",
    name: "username",
    placeholder: "Username",
    mt: "0.5rem",
    value: model.$username,
    error: model.$usernameError,
    onChange: (e) => model.usernameChange(e.target.value),
  },
});

const EmailField = reflect({
  view: TextInput,
  bind: {
    label: "Email",
    name: "email",
    mt: "0.5rem",
    placeholder: "Email",
    value: model.$email,
    error: model.$emailError,
    onChange: (e) => model.emailChanged(e.target.value),
  },
});

const PasswordField = reflect({
  view: TextInput,
  bind: {
    label: "Password",
    name: "password",
    placeholder: "Password",
    mt: "0.5rem",
    type: "password",
    value: model.$password,
    error: model.$passwordError,
    onChange: (e) => model.passwordChange(e.target.value),
  },
});
