import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const formContainer = style({
  width: "100%",
  maxWidth: "40rem",
  marginTop: "30vh",
});
