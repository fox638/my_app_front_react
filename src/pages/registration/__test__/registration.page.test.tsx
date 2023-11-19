import { render, screen, fireEvent } from "@testing-library/react";
import { fork } from "effector";
import { beforeEach, test, expect, vi } from "vitest";
import * as model from "../model";
import { Provider } from "effector-react";
import RegistrationPage from "../registration.page";
import { registrationFx } from "@/shared/api/mutation/auth.ts";

vi.mock("@/shared/api/mutation/auth.ts", async (importOriginal) => {
  const mod = await importOriginal<
    typeof import("@/shared/api/mutation/auth.ts")
  >();

  const registrationFx = vi.fn(() => {
    return {
      ok: true,
    };
  });
  return {
    ...mod,
    registrationFx,
  };
});

const selectors = {
  username: async () => screen.findByLabelText("Username"),
  email: async () => screen.findByLabelText("Email"),
  password: async () => screen.findByLabelText("Password"),
  submit: async () => screen.findByText(/Submit/i),
};

test("render on default state", async () => {
  render(<RegistrationPage />);

  const email = await selectors.email();
  const username = await selectors.username();
  const password = await selectors.password();
  const submit = await selectors.submit();

  expect(email).toBeInTheDocument();
  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submit).toBeInTheDocument();

  expect(email).not.toBeDisabled();
  expect(username).not.toBeDisabled();
  expect(password).not.toBeDisabled();
  expect(submit).not.toBeDisabled();

  expect(email).toHaveValue("");
  expect(username).toHaveValue("");
  expect(password).toHaveValue("");
});

test("render on filled state", async () => {
  const scope = fork({
    values: new Map([[model.$email, "my@email.com"]]),
  });

  render(
    <Provider value={scope}>
      <RegistrationPage />
    </Provider>
  );
});

test("Проверка работы отправки формы", async () => {
  const scope = fork();

  render(
    <Provider value={scope}>
      <RegistrationPage />
    </Provider>
  );

  const email = await selectors.email();
  const uasername = await selectors.username();
  const password = await selectors.password();
  const submit = await selectors.submit();

  fireEvent.change(email, {
    target: {
      value: "my@email.com",
    },
  });

  fireEvent.change(uasername, {
    target: {
      value: "dima",
    },
  });
  fireEvent.change(password, {
    target: {
      value: "111",
    },
  });

  fireEvent.click(submit);

  expect(registrationFx).toHaveBeenCalled();
  expect(registrationFx).toHaveBeenCalledWith(null, {
    email: "my@email.com",
    password: "111",
    username: "dima",
  });
});

// заполнить данные  формы
// отправить форму
// получить в mock функции данные которые были в полях
