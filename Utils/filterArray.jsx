"use client";

// funtion to utilize the argument array for filtering, and call setVansData on the filtered array
//This function should be called in a use Effect when the
//import { useContext } from "react";

//import useMyContext from "../Hooks/useMyContext";

const filterArray = (argumentArray, VansData, setWorkingVansData) => {
  //console.log("filter Array was called ");

  //Check to see if there are no types in the argument array. If none (no filtering) set the array to the original and reurn
  if (argumentArray.length == 0) {
    setWorkingVansData(VansData);
    return;
  }

  //  const [argumentArray, setVansData, VansData] = useContext(useMyContext);
  //console.log("VansData: " + VansData[0]?.type);

  //Create filtered array using the arguments array against the oringal vans data array
  const filteredArray = VansData.filter((element) => {
    return argumentArray.includes(
      element.type[0].toUpperCase() + element.type.slice(1)
    );
  });
  //console.log("Filtered Array: " + filteredArray);

  //Update the working array used to display
  setWorkingVansData(filteredArray);
};

export default filterArray;
