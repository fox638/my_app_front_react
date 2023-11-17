import React, { ElementType, ReactNode, forwardRef } from "react";
import { box } from "./Box.css";
import clsx from "clsx";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "@/shared/types/polymorphicComponent";

type BoxProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    withBorder?: boolean;
  }
>;

type BoxComponent = <C extends ElementType = "div">(
  props: BoxProps<C>
) => ReactNode | null;

export const Box: BoxComponent = forwardRef(
  <C extends ElementType = "div">(
    { children, as, className, withBorder, ...rest }: BoxProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";

    return (
      <Component
        className={clsx(box, className)}
        data-with-border={withBorder}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default Box;
