/*  Refactored into parent component


import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Image from "next/image";
const HostVanDetailBanner = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    //fetch(`/api/vans/${id}`)
    //.then((response) => response.json())
    //.then((data) => setVan(data));

    const getVanData = async () => {
      try {
        const response = await fetch(`/api/vans/${id}`);
        console.log("this is response.ok: ", response.ok);
        if (response.ok) {
          const data = await response.json();

          setVan(data.vans);
        } else {
          console.error(`Error fetching van data. Status: ${response.status}`);
        }
      } catch (error) {
        console.log("An error occurred while fetching van data:", error);
      }
    };

    getVanData();

    return () => {
      setVan(null);
    };
  }, [id]);

  return (
    <>
      {van ? (
        <div className="host-van-detail-banner">
          <Image src={van.imageUrl} width={160} height={158}></Image>
          <div className="host-van-detail-banner-info">
            <i
              className={`van-type ${
                van.type[0].toUpperCase() + van.type.slice(1)
              } selected`}
            >
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </i>
            <div className="host-van-name">{van.name}</div>
            <div className="host-van-price-rate">
              <div className="host-van-price">${van.price}</div>
              <div className="host-van-price-time">/day</div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
};

export default HostVanDetailBanner;

*/
