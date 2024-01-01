import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanDetailPhotos = () => {
  const van = useOutletContext();

  return (
    <>{van && <img src={van.imageUrl} className="host-van-detail-image" />}</>
  );
};
export default HostVanDetailPhotos;
