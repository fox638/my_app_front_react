import { FC, InputHTMLAttributes, useId } from "react";
import {
  textInputStyle,
  textInputContainerStyle,
  labelStyle,
} from "./TextInput.css";
import clsx from "clsx";
import { Typography } from "../Typography";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  label?: string;
  error?: Nullable<ErrorType>;
}

export const TextInput: FC<TextInputProps> = ({
  type = "text",
  className,
  containerClassName,
  label,
  id,
  error,
  ...rest
}) => {
  const randomId = useId();

  return (
    <div className={clsx(textInputContainerStyle, containerClassName)}>
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
