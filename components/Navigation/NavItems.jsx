import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="NavItems">
      <Link className="NavItem" to="./About">
        About
      </Link>
      <Link className="NavItem" to="/">
        Vans
      </Link>
    </div>
  );
};

export default NavItems;
