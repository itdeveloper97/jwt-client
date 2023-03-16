import { Navigate } from "react-router-dom";

import { useAuth } from "../store/useAuth";

export const RedirectAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  if (!auth.user?.token) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};
