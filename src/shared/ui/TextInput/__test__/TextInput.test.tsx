import { expect, test } from "vitest";
import { TextInput } from "..";
import { render } from "@testing-library/react";

test("render component", () => {
  const { getByLabelText } = render(<TextInput label="Email" />);

  expect(getByLabelText("Email")).toBeInTheDocument();
});
