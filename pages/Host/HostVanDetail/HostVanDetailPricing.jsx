import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetailPricing = () => {
  const van = useOutletContext();

  return (
    <div className="host-van-detail-price-rate">
      <div className="host-van-detail-pricing">${van.price}.00</div>
      <div className="host-van-detail-price-time">/day</div>
    </div>
  );
};

export default HostVanDetailPricing;
