import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import HostDetailNavigation from "../Navigation/HostDetailNavigation";
import Image from "next/image";

//import HostVanDetailBanner from "../../pages/Host/HostVanDetail/HostVanDetailBanner";
import { useParams } from "react-router";
import { getVan } from "../../Api/api";

const HostVanDetailLayout = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
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
    <div className="host-van-detail-layout-container">
      <NavLink to=".." relative="path" className="host-van-detail-return-link">
        &larr; Back to all vans
      </NavLink>
      <section className="host-van-detail-layout ">
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
        <HostDetailNavigation />
        <Outlet context={van} />
      </section>
    </div>
  );
};

export default HostVanDetailLayout;
