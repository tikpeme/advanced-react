import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import VanTypes from "./VanTypes";

import updateArguments from "../../Utils/updateArguments";
import { VansContext } from "./Vans";

const VansIntroduction = () => {
  const [resetButton1, setResetButton1] = useState(false);

  const { argumentArray, setArgumentArray } = useContext(VansContext);
  //console.log("This is the new argumentArray: " + argumentArray);

  const clearFilters = () => {
    setArgumentArray([]);
    setResetButton1((prev) => !prev);
  };
  return (
    <div className="van-introduction">
      <div className="van-header">Explore our van options</div>
      <div className="van-subheader">
        <VanTypes resetState={resetButton1} className="van-types">
          {["Simple", "Luxury", "Rugged"]}
        </VanTypes>

        <div onClick={clearFilters} className="clear-filter">
          Clear filters
        </div>
      </div>
    </div>
  );
};

export default VansIntroduction;
