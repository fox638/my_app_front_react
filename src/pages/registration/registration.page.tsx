import React from "react";
import * as classes from "./registration.page.css";
import { Box } from "@/shared/ui/Box";
import { Typography } from "@/shared/ui/Typography";
import TextInput from "@/shared/ui/TextInput/TextInput";

interface RegistrationPageProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  return (
    <div className={classes.container}>
      <Box className={classes.formContainer} withBorder>
        <Typography as="h2" variant="h1" textAlign="center">
          Registration
        </Typography>

        <TextInput label="Email" placeholder="Email" error="invalid email" />
      </Box>
    </div>
  );
};

export default RegistrationPage;
