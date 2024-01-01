import React from "react";
import { NavLink, useParams } from "react-router-dom";

const HostDetailNavigation = () => {
  const { id } = useParams();
  const HostDetailNavigationStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };
  return (
    <nav className="host-detail-nav">
      <NavLink
        end
        style={({ isActive }) => (isActive ? HostDetailNavigationStyle : null)}
        to={`.`}
      >
        {" "}
        Details
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? HostDetailNavigationStyle : null)}
        to={`pricing`}
      >
        Pricing{" "}
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? HostDetailNavigationStyle : null)}
        to={`photos`}
      >
        Photos{" "}
      </NavLink>
    </nav>
  );
};

export default HostDetailNavigation;
