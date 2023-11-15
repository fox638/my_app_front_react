import { globalStyle } from "@vanilla-extract/css";

globalStyle(
  ` *,
*::after,
*::before`,
  {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  }
);

globalStyle("*", {
  scrollbarWidth: "thin",
  scrollbarColor: `#ccd8df #fafafa`,
});

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body", {
  fontFamily: '"Roboto", sans-serif',
  fontSize: "1.6rem",
});
