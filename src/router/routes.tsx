import { createBrowserRouter } from "react-router-dom";
import { NotAuthorizedLayout } from "../layout/notAuthorizedLayout/NotAuthorizedLayout";
import { AuthorizedLayout } from "../layout/authorized/AuthorizedLayout";
import { LoginPage } from "../pages/login/LoginPage";
import { HomePage } from "../pages/home/HomePage";
import { routeLink } from "./const/routeLink";
import { RedirectHome } from "../features/auth/components/RedirectHome";
import { RedirectAuth } from "../features/auth/components/RedirectAuth";

export const routes = createBrowserRouter([
  {
    path: routeLink.root,
    element: (
      <RedirectAuth>
        <AuthorizedLayout />
      </RedirectAuth>
    ),
    children: [
      {
        path: routeLink.root,
        element: <HomePage />,
      },
    ],
  },
  {
    path: routeLink.login,
    element: (
      <RedirectHome>
        <NotAuthorizedLayout />
      </RedirectHome>
    ),
    children: [
      {
        path: routeLink.login,
        element: <LoginPage />,
      },
    ],
  },
]);
