import React, { FormEvent } from "react";
import * as classes from "./registration.page.css";
import { Box } from "@/shared/ui/Box";
import { Typography } from "@/shared/ui/Typography";
import TextInput from "@/shared/ui/TextInput/TextInput";
import { Button } from "@/shared/ui/Button";
import useEvent from "@/shared/lib/hook/useEvent";

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const handleFormSubmit = useEvent((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

        <TextInput
          label="Username"
          placeholder="Username"
          mt="0.5rem"
          name="username"
        />
        <TextInput label="Email" placeholder="Email" mt="0.5rem" name="email" />
        <TextInput
          label="Password"
          name="password"
          placeholder="password"
          mt="0.5rem"
          type="password"
        />

        <Button fullWidth mt="3rem" type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default RegistrationPage;
