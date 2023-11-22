import { render, screen } from "@testing-library/react";
import LoginPage, {
  $email,
  $emailError,
  $formDisabled,
  $password,
  $passwordError,
} from "../login.page";
import { describe, expect, test } from "vitest";
import { fork } from "effector";
import { Provider } from "effector-react";

/**
  отобразить состояние по умолчания 
  отобразить заполненное состояние 
  отобразить ошибки input 
  заблокировать кнопку submit при pending
  заблокировать кнопку submit при error
*/

const selectors = {
  email: () => screen.getByLabelText("Email"),
  emailErrorLabel: (label: string) => screen.getByText(label),
  password: () => screen.getByLabelText("Password"),
  passwordErrorLabel: (label: string) => screen.getByText(label),
  submit: () => screen.getByText("Submit"),
};

describe("LoginPage", () => {
  test("render on default state", async () => {
    render(<LoginPage />);
    const email = await selectors.email();
    const password = await selectors.password();
    const submit = await selectors.submit();

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    expect(email).toHaveValue("");
    expect(password).toHaveValue("");
    expect(submit).not.toBeDisabled();
  });

  test("render on filled state", async () => {
    const scope = fork({
      values: new Map([
        [$email, "my@email.ru"],
        [$password, "123456"],
      ]),
    });

    render(
      <Provider value={scope}>
        <LoginPage />
      </Provider>
    );
    const email = await selectors.email();
    const password = await selectors.password();

    expect(email).toHaveValue("my@email.ru");
    expect(password).toHaveValue("123456");
  });

  test("error should be displayed", async () => {
    const scope = fork({
      values: new Map()
        .set($emailError, "email error")
        .set($formDisabled, true)
        .set($passwordError, "password error"),
    });

    render(
      <Provider value={scope}>
        <LoginPage />
      </Provider>
    );
    const emailError = await selectors.emailErrorLabel("email error");
    const passwordError = await selectors.passwordErrorLabel("password error");

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
    expect(emailError).toHaveTextContent("email error");
    expect(passwordError).toHaveTextContent("password error");
  });
});
