import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Typography } from "..";

test("render component", async () => {
  const { getByText } = render(<Typography children="Hello" />);

  expect(getByText("Hello")).toBeInTheDocument();
});
