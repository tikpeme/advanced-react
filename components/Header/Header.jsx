import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
import Image from "next/image";
import icon from "../../assets/images/User-circle.png";
const Header = () => {
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  const location = useLocation();

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink to="login" className="login-link" state={{ from: location }}>
          <Image
            src={icon}
            className="login-icon"
            width={20}
            height={20}
            alt="log in Icon"
          />
        </NavLink>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default Header;
