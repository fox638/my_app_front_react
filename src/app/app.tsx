import { PropsWithChildren, lazy, FC } from "react";
import "./style/fonts.css";
import "./style/globalStyle.css";

interface AppProps extends PropsWithChildren {}

export const App: FC<AppProps> = ({ children }) => {
  return <>{children}</>;
};

export default App;
