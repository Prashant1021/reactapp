import React from "react";
import { Outlet } from "react-router-dom";
import "../style/main.css";

const AuthLayout = () => {
  return (
    <div className="backgroundauth">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
