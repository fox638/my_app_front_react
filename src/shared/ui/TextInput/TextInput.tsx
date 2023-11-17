import { CSSProperties, FC, InputHTMLAttributes, useId } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  textInputStyle,
  textInputContainerStyle,
  labelStyle,
  marginTop,
} from "./TextInput.css";
import clsx from "clsx";
import { Typography } from "../Typography";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  label?: string;
  error?: Nullable<ErrorType>;
  mt?: string;
}

export const TextInput: FC<TextInputProps> = ({
  type = "text",
  className,
  containerClassName,
  label,
  id,
  error,
  mt,
  ...rest
}) => {
  const randomId = useId();

  return (
    <div
      className={clsx(textInputContainerStyle, containerClassName)}
      style={assignInlineVars({
        [marginTop]: mt,
      })}
    >
      {label && (
        <Typography
          as="label"
          variant="smallText"
          className={labelStyle}
          htmlFor={id || randomId}
        >
          {label}
        </Typography>
      )}
      <input
        id={id || randomId}
        type={type}
        className={clsx(textInputStyle, className)}
        {...rest}
      />
      {error && (
        <Typography color="warnDark" variant="smallText">
          {error}
        </Typography>
      )}
    </div>
  );
};

export default TextInput;
