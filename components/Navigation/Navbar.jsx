import React from "react";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems";
import "./Navigation.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Logo></Logo>
      <NavItems></NavItems>
    </div>
  );
};

export default Navbar;
