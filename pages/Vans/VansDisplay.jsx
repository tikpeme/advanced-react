import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const VansDisplay = ({ children }) => {
  return <div className="van-display">{children}</div>;
};

export default VansDisplay;
