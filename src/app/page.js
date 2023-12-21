"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/Navigation/Navbar";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
