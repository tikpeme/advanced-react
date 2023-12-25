import React, { useState } from "react";

const VanTypeButton = ({ children, className, onClick, ...rest }) => {
  const [buttonState, setButtonState] = useState("");

  const toggleButton = () => {
    setButtonState((prev) => (prev === "" ? "active" : ""));
  };

  const combinedClick = (e) => {
    onClick(e);
    toggleButton();
    console.log(buttonState);
  };

  return (
    <button
      onClick={combinedClick}
      className={`${className} ${buttonState}`}
      {...rest}
    >
      {children}
      {console.log("I rendereed")}
    </button>
  );
};

export default VanTypeButton;
