"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navigation/Navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Vans from "../../pages/Vans/Vans";
import VanDetail from "../../pages/VanDetail/VanDetail";

import "../../mock-server/server";
import Layout from "../../components/Layouts/Layout";
import Dashboard from "../../pages/Host/Dashboard";
import Income from "../../pages/Host/Income";
import Reviews from "../../pages/Host/Reviews";
import HostLayout from "../../components/Layouts/HostLayout";
import HostVans from "../../pages/Host/HostVans";
import HostVanDetail from "../../pages/Host/HostVanDetail/HostVanDetail";
import HostVanDetailLayout from "../../components/Layouts/HostVanDetailLayout";
import HostVanDetailPricing from "../../pages/Host/HostVanDetail/HostVanDetailPricing";
import HostVanDetailPhotos from "../../pages/Host/HostVanDetail/HostVanDetailPhotos";
import CatchAll from "../../pages/ErrorPage/CatchAll";
import Login from "../../pages/Login/Login";

import AuthRequired from "../../Auth/AuthRequired";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetailLayout />}>
                <Route index element={<HostVanDetail />} />
                <Route path="pricing" element={<HostVanDetailPricing />} />
                <Route path="photos" element={<HostVanDetailPhotos />} />
              </Route>{" "}
            </Route>
          </Route>
          <Route path="*" element={<CatchAll></CatchAll>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
