import { expect, describe, it } from "vitest";
import { TextInput } from "..";
import { render } from "@testing-library/react";

describe("TextInput", () => {
  describe("root element", () => {
    it("should be in the document", () => {
      const { getByLabelText } = render(<TextInput label="Email" />);
      expect(getByLabelText("Email")).toBeInTheDocument();
    });

    it("should contain `type` attribute with `text value`", () => {
      const { getByLabelText } = render(<TextInput label="Email" />);
      expect(getByLabelText("Email")).toHaveAttribute("type", "text");
    });

    describe("when placeholder property", () => {
      describe("is set", () => {
        const placeholder = "placeholder";

        describe("root element", () => {
          it("should contain 'placeholder' attribute with 'placeholder' property as value", () => {
            const { getByLabelText } = render(
              <TextInput placeholder={placeholder} label="Email" />
            );

            expect(getByLabelText("Email")).toHaveAttribute(
              "placeholder",
              placeholder
            );
          });
        });
      });
    });
  });
});
