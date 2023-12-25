import React, { useContext, useEffect } from "react";

import updateArguments from "../../Utils/updateArguments";
import { VansContext } from "./Vans";
import filterArray from "../../Utils/filterArray";
import VanTypeButton from "./VanTypeButton";

export const VanTypes = ({ children }) => {
  const { VansData, argumentArray, setArgumentArray, setWorkingVansData } =
    useContext(VansContext);

  const handleEvent = (e) => {
    updateArguments(e.target.dataset.value, argumentArray, setArgumentArray);
  };

  //To be called at first render, and when the argument array is updated
  useEffect(() => {
    filterArray(argumentArray, VansData, setWorkingVansData);
  }, [argumentArray]);

  return (
    <>
      {children.map((child, index) => (
        <VanTypeButton
          key={index}
          className={`button-van-type ${child} `}
          onClick={handleEvent}
          data-value={child}
        >
          {child}
        </VanTypeButton>
      ))}
    </>
  );
};

export default VanTypes;
