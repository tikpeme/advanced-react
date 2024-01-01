import React from "react";
import { Outlet, Navigate, useLocation } from "react-router";

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedin");
  const location = useLocation();

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return (
      <Navigate
        replace
        to="/login"
        state={{ message: "You must log in first", from: location }}
      />
    );
  }
};

export default AuthRequired;
