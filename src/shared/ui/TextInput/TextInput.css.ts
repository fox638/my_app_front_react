import { theme } from "@/shared/styles/theme";
import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const textInputContainerStyle = style({
  width: "100%",
});

export const textInputStyle = style({
  width: "100%",
  ...vars.typography.body,
  padding: "0.5rem",
  outline: "none",
  border: `0.2rem solid ${theme.colors.primaryDark}`,
  backgroundColor: theme.colors.primaryLight,
  borderRadius: "0.6rem",
});

export const labelStyle = style({});
