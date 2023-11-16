import { PropsWithChildren, FC } from "react";
import { box } from "./Box.css";
import clsx from "clsx";

interface BoxProps extends PropsWithChildren {
  className?: string;
  withBorder?: boolean;
}

export const Box: FC<BoxProps> = ({ children, className, withBorder }) => {
  return (
    <div className={clsx(box, className)} data-with-border={withBorder}>
      {children}
    </div>
  );
};

export default Box;
