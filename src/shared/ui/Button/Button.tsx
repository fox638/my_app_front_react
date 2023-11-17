import { FC, ComponentProps } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { btnStyleVariants, marginTop } from "./Button.css";
import clsx from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: keyof typeof btnStyleVariants;
  fullWidth?: boolean;
  mt?: string;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  fullWidth,
  mt,
  ...rest
}) => {
  return (
    <button
      className={clsx(btnStyleVariants[variant], className)}
      style={{
        ...assignInlineVars({
          [marginTop]: mt,
        }),
        ...(rest.style && { ...rest.style }),
      }}
      data-full-width={fullWidth}
      {...rest}
    />
  );
};

export default Button;
