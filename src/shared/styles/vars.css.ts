import { createGlobalTheme, createVar } from "@vanilla-extract/css";

export const desktopBreakpoint = createVar();
export const lineHeightRelaxed = createVar();

export const vars = createGlobalTheme(":root", {
  spacing: {
    spacingPx: "1px",
    spacing0: "0",
    spacing1: "0.25rem",
    spacing2: "0.5rem",
    spacing3: "0.75rem",
    spacing4: "1rem",
    spacing5: "1.25rem",
    spacing6: "1.5rem",
    spacing8: "2.0rem",
    spacing12: "3.0rem",
  },
  font: {
    family: {
      fontFamilyBody: "Source Sans Pro",
      fontFamilyHeading: "Source Serif Pro",
    },
    size: {
      h1: "2.4rem",
      h2: "1.8rem",
      body: "1.6rem",
      smallText: "1.4rem",
      emphasized: "2rem",
      importantWords: "1.8rem",
      link: "1.6rem",
      activeLink: "1.8rem",
    },
    weight: {
      fontWeightBold: "bold",
      fontWeightNormal: "normal",
    },
  },

  typography: {
    h1: {
      fontSize: "2.4rem",
      lineHeight: "1.5",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.8rem",
      lineHeight: "1.5",
      fontWeight: "bold",
    },
    body: {
      fontSize: "1.6rem",
      lineHeight: "1.5",
      fontWeight: "normal",
    },
    smallText: {
      fontSize: "1.4rem",
      lineHeight: "1.5",
      fontWeight: "normal",
    },
    emphasized: {
      fontSize: "2rem",
      lineHeight: "1.5",
      fontWeight: "bold",
    },
    importantWords: {
      fontSize: "1.8rem",
      lineHeight: "1.5",
      fontWeight: "bold",
    },
    link: {
      fontSize: "1.6rem",
      lineHeight: "1.5",
      fontWeight: "normal",
    },
    activeLink: {
      fontSize: "1.8rem",
      lineHeight: "1.5",
      fontWeight: "normal",
    },
  },
  headerHeight: "6rem",
});
