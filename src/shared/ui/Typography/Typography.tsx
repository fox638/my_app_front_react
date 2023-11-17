import { ElementType } from "react";
import {
  typographyBase,
  typographyVariants,
  colorsVariant,
} from "./Typography.css";
import type { Property } from "csstype";
import clsx from "clsx";
import { vars } from "@/shared/styles/vars.css";
import { theme } from "@/shared/styles/theme";
import type { PolymorphicComponentProp } from "@/shared/types/polymorphicComponent";

type TypographyProps = {
  variant?: keyof typeof vars.typography;
  color?: keyof typeof theme.colors;
  textAlign?: Property.TextAlign;
  className?: string;
};

export const Typography = <C extends ElementType = "span">({
  as,
  variant = "body",
  children,
  textAlign,
  className,
  color = "primaryDark",
  ...restProps
}: PolymorphicComponentProp<C, TypographyProps>) => {
  const Component = as || "span";
  return (
    <Component
      className={clsx(
        typographyBase,
        typographyVariants[variant],
        colorsVariant[color],
        className
      )}
      style={{ textAlign }}
      {...restProps}
    >
      {children}
    </Component>
  );

  // return createElement(
  //   as,
  //   {
  //     class: clsx(typographyBase, typographyVariants[variant], className),
  //     style: { textAlign },
  //   },
  //   children
  // );
};

export default Typography;
