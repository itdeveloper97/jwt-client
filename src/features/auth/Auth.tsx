import React from "react";
import "./index.css";
import { useLogin } from "./hooks/useLogin";

export const Auth = () => {
  const {
    form: { handleSubmit, register },
    onSubmit,
  } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"login-form__field"}>
        <label htmlFor="login">Login</label>
        <input
          type="text"
          placeholder={"login"}
          id={"login"}
          {...register("login")}
        />
      </div>
      <div className={"login-form__field"}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder={"Password"}
          id={"password"}
          {...register("password")}
        />
      </div>
      <div className={"login-form__field"}>
        <input type="submit" />
      </div>
    </form>
  );
};
