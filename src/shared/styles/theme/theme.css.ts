import { createTheme } from "@vanilla-extract/css";

export const [themeClass, theme] = createTheme({
  colors: {
    primaryDark: "#0D0512",
    primaryLight: "#7E9593",
    secondaryDark: "#383F37",
    secondaryLight: "#60675D",
    warnDark: "#990001",
  },
});
