import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";

import "./Vans.css";
import VansIntroduction from "./VansIntroduction";
import VansSection from "./VansSection";
import VansDisplay from "./VansDisplay";
import VansElement from "./VansElement";
import { Link } from "react-router-dom";
import { getVans } from "../../Api/api";

const VansContext = createContext();

const Vans = () => {
  const [VansData, setVansData] = useState([]); //For vans data, not to be changed after initialization.
  const [argumentArray, setArgumentArray] = useState([]); //For argument array, for filtering
  const [workingVansData, setWorkingVansData] = useState([]); //Array usded to display data. To be updated based on arguments array
  const [loading, setLoading] = useState(false); //

  const [error, setError] = useState(null);

  //Run at the beginning to initialize VansData
  React.useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVansData(data);
        setWorkingVansData(data);
      } catch (err) {
        setError(err);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

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
      <VansSection className="Van-section">
        <VansIntroduction></VansIntroduction>
        <VansDisplay className="van-display">
          {workingVansData?.map((van) => (
            <Link to={`/vans/${van.id}`} style={{ textDecoration: "none" }}>
              <VansElement className="van-element" key={van.id}>
                <Image
                  className="van-picture"
                  src={van.imageUrl}
                  layout="responsive"
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
              </VansElement>
            </Link>
          ))}
        </VansDisplay>
      </VansSection>
    </VansContext.Provider>
  );
};

export default Vans;
export { VansContext };
