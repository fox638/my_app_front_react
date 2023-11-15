import { theme } from "@/shared/styles/theme";
import { style } from "@vanilla-extract/css";

export const layoutContainer = style({
  width: "100%",
  height: "100vh",
  backgroundColor: theme.colors.primaryLight,
});
