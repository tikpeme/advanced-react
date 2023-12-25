import React, { useEffect } from "react";
import VanTypes from "./VanTypes";

import updateArguments from "../../Utils/updateArguments";

const VansIntroduction = () => {
  return (
    <div className="van-introduction">
      <div className="van-header">Explore our van options</div>
      <div className="van-subheader">
        <VanTypes className="van-types">
          {["Simple", "Luxury", "Rugged"]}
        </VanTypes>

        <div className="clear-filter">Clear filters</div>
      </div>
    </div>
  );
};

export default VansIntroduction;
