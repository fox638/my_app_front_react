import { PropsWithChildren } from "react";
import clsx from "clsx";
import * as classes from "./layout.css";
import { themeClass } from "@/shared/styles/theme";

interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={clsx(themeClass, classes.layoutContainer)}>{children}</div>
  );
};

export default Layout;
