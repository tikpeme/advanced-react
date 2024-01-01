import React from "react";
import { Outlet } from "react-router";
import HostNavigation from "../Navigation/HostNavigation";

import "../../pages/Host/Host.css";
const HostLayout = () => {
  return (
    <>
      <HostNavigation />
      <Outlet />
    </>
  );
};

export default HostLayout;
