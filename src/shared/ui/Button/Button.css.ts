import { theme } from "@/shared/styles/theme";
import { vars } from "@/shared/styles/vars.css";
import {
  style,
  styleVariants,
  createVar,
  fallbackVar,
} from "@vanilla-extract/css";

export const marginTop = createVar();

export const btnBaseStyle = style({
  ...vars.typography.body,
  border: `0.2rem solid ${theme.colors.primaryDark}`,
  borderRadius: "0.6rem",
  padding: "0.5rem 2rem",
  cursor: "pointer",
  backgroundColor: "transparent",
  marginTop: fallbackVar(marginTop, "0"),
  selectors: {
    "&:active:not(:disabled)": {
      transform: "scale(1.02)",
    },
    "&:disabled": {
      borderColor: theme.colors.secondaryLight,
      color: theme.colors.secondaryLight,
    },
    '&[data-full-width="true"]': {
      width: "100%",
    },
  },
});

export const btnStyleVariants = styleVariants({
  primary: [btnBaseStyle, {}],
});
