import React from "react";
import { NavLink } from "react-router-dom";
const HostNavigation = () => {
  const active = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <nav className="host-nav">
      <NavLink
        end
        style={({ isActive }) => (isActive ? active : null)}
        to="/host"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : null)}
        to="/host/reviews"
      >
        Review
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : null)}
        to="/host/vans"
      >
        Vans
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? active : null)}
        to="/host/income"
      >
        Income
      </NavLink>
    </nav>
  );
};

export default HostNavigation;
