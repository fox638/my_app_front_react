import "./style/fonts.css";
import "./style/globalStyle.css";
import { lazy, FC, Suspense } from "react";
import { DefaultParams, Route, RouteComponentProps } from "wouter";
import { Provider as URQLProvider } from "urql";
import { ROUTES } from "@/shared/styles/routes";
import { Toaster } from "react-hot-toast";
import { Layout } from "./layout";
import { client } from "@/shared/api/client";

const IndexPage = lazy(() => import("@/pages/index"));
const RegistrationPage = lazy(() => import("@/pages/registration"));
const LoginPage = lazy(() => import("@/pages/login"));

export const App: FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Toaster />
      <URQLProvider value={client}>
        <Layout>
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          ))}
        </Layout>
      </URQLProvider>
    </Suspense>
  );
};

export default App;

type RouteType = Readonly<{
  path: string;
  // exact?: boolean;
  // isPrivate: boolean;
  component: React.ComponentType<RouteComponentProps<DefaultParams>>;
}>;

const routes: Array<RouteType> = [
  {
    path: ROUTES.root,
    component: IndexPage,
  },
  {
    path: ROUTES.registration,
    component: RegistrationPage,
  },
  {
    path: ROUTES.login,
    component: LoginPage,
  },
];
