import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import VansElement from "../Vans/VansElement";
import Image from "next/image";
import { getVan } from "../../Api/api";

const VanDetail = () => {
  const { id } = useParams();

  const [van, setVan] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    //fetch(`/api/vans/${id}`)
    //.then((response) => response.json())
    //.then((data) => setVan(data));

    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <div className="returnlinck"> {} </div>
      <div className="van-detail-container">
        {van ? (
          <div className="van-detail">
            <img src={van.imageUrl} />
            <i
              className={`van-type ${
                van.type[0].toUpperCase() + van.type.slice(1)
              } selected`}
            >
              {van.type[0].toUpperCase() + van.type.slice(1)}
            </i>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
};

export default VanDetail;
