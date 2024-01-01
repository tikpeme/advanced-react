import React, { forwardRef, useEffect, useState } from "react";

const VanTypeButton = ({
  children,
  className,
  onClick,
  resetState,
  ...rest
}) => {
  const [buttonState, setButtonState] = useState("");

  const toggleButton = () => {
    setButtonState((prev) => (prev === "" ? "active" : ""));
  };

  const combinedClick = (e) => {
    onClick(e);
    toggleButton();
    console.log(buttonState);
  };

  // Reset the local state when resetState prop changes
  useEffect(() => {
    setButtonState("");
  }, [resetState]);

  return (
    <>
      <button
        onClick={combinedClick}
        className={`${className} ${buttonState}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};
export default VanTypeButton;
