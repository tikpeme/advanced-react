"use client";
import React, { useContext } from "react";
import filterArray from "./filterArray";

//import a hook

const updateArguments = (newArgument, argumentArray, setArgumentArray) => {
  let newArray; //Initialize the new array

  //check to see if argument is already in array. If so remove, else add it
  if (argumentArray.includes(newArgument)) {
    newArray = argumentArray.filter((argument) => newArgument !== argument);
  } else newArray = [...argumentArray, newArgument];

  //console.log("New Array: " + newArray);
  //console.log("New argument: " + newArgument);

  //Update the Argument Array
  setArgumentArray(newArray);
};

export default updateArguments;
