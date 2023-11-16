import { theme } from "@/shared/styles/theme";
import { vars } from "@/shared/styles/vars.css";
import { ComplexStyleRule, style, styleVariants } from "@vanilla-extract/css";

export const typographyBase = style({});

export const typographyVariants = styleVariants(
  Object.keys(vars.typography).reduce((style, variant) => {
    style[variant] = vars.typography[variant as keyof typeof vars.typography];
    return style;
  }, {} as Record<string | number, ComplexStyleRule>)
);

export const colorsVariant = styleVariants(
  Object.keys(theme.colors).reduce((style, variant) => {
    style[variant] = {
      color: theme.colors[variant as keyof typeof theme.colors],
    };
    return style;
  }, {} as Record<string | number, ComplexStyleRule>)
);
