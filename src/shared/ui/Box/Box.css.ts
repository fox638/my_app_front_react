import { theme } from "@/shared/styles/theme";
import { vars } from "@/shared/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const box = style({
  padding: vars.spacing.spacing8,
  selectors: {
    '&[data-with-border="true"]': {
      border: `0.2rem solid ${theme.colors.primaryDark}`,
      borderRadius: "0.5rem",
    },
  },
});
