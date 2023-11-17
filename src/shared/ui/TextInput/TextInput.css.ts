import { theme } from "@/shared/styles/theme";
import { vars } from "@/shared/styles/vars.css";
import { style, createVar, fallbackVar } from "@vanilla-extract/css";

export const marginTop = createVar();

export const textInputContainerStyle = style({
  width: "100%",
  marginTop: fallbackVar(marginTop, "0"),
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
