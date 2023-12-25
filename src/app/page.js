"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navigation/Navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Vans from "../../pages/Vans/Vans";

import "../../mock-server/server";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}
