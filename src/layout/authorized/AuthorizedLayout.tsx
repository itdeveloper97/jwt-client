import { Outlet } from "react-router-dom";
import "./index.css";

export const AuthorizedLayout = () => {
  return (
    <div className={"authorized__layout"}>
      <div className={"authorized__header"}>Header</div>
      <div className={"authorized__content"}>
        <Outlet />
      </div>
      <div className={"authorized__footer"}>Footer</div>
    </div>
  );
};
