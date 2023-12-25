import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";

import "./Vans.css";
import VansIntroduction from "./VansIntroduction";
import filterArray from "../../Utils/filterArray";

const VansContext = createContext();

const Vans = () => {
  const [VansData, setVansData] = useState([]); //For vans data, not to be changed after initialization.
  const [argumentArray, setArgumentArray] = useState([]); //For argument array, for filtering
  const [workingVansData, setWorkingVansData] = useState([]); //Array usded to display data. To be updated based on arguments array

  //Run at the beginning to initialize VansData
  useEffect(() => {
    const fetchVansData = async () => {
      try {
        const response = await fetch("/api/vans");
        //console.log(response);

        const data = await response.json();

        setVansData(data.vans);
        setWorkingVansData(data.vans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchVansData();

    return () => {
      setVansData(null);
      console.log("Cleanup completed");
    };
  }, []);

  return (
    <VansContext.Provider
      value={{
        VansData,
        argumentArray,
        setArgumentArray,
        workingVansData,
        setWorkingVansData,
      }}
    >
      <section className="Van-section">
        <VansIntroduction></VansIntroduction>
        <div className="van-display">
          {workingVansData?.map((van) => (
            <div className="van-element" key={van.id}>
              <Image
                className="van-picture"
                src={van.imageUrl}
                width={229.23}
                height={0}
                priority={true}
                style={{
                  height: "auto",
                }}
                alt={van.description}
              />
              <div className="van-details">
                <div className="van-details-subgroup">
                  <div className="van-name"> {van.name}</div>
                  <div
                    className={`van-type ${
                      van.type[0].toUpperCase() + van.type.slice(1)
                    } `}
                  >
                    {" "}
                    {van.type[0].toUpperCase() + van.type.slice(1)}
                  </div>
                </div>
                <div className="van-price-rate">
                  <div className="van-price">${van.price}</div>
                  <div className="van-price-time"> /day</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </VansContext.Provider>
  );
};

export default Vans;
export { VansContext };
