import React from "react";
import { NavLink } from "react-router-dom";

const CatchAll = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "Center",
        alignItems: "center",
        width: "70vw",
        margin: "auto",
      }}
    >
      <h1>Sorry, the page you were looking for was not found.</h1>
      <NavLink
        style={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
          padding: "15px 0",
          textAlign: "center",
          textDecoration: "none",
        }}
        to="/"
      >
        {" "}
        Return to Home
      </NavLink>
    </div>
  );
};

export default CatchAll;
