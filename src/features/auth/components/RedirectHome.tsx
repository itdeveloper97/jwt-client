import { useAuth } from "../store/useAuth";
import { Navigate } from "react-router-dom";

export const RedirectHome = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  if (auth.user?.token) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};
