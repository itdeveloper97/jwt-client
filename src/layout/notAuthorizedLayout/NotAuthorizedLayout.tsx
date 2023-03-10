import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
export const NotAuthorizedLayout = () => {
  return (
    <div className={"not-authorized__layout"}>
      <div className={"not-authorized__header"}>
        <h1>Welcome to PartyHub</h1>
      </div>
      <div className={"not-authorized__content"}>
        <Outlet />
      </div>
      <div className={"not-authorized__footer"}>Footer</div>
    </div>
  );
};
