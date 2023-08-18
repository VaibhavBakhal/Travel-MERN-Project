import { React, useState, Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Company from "./components/Company/Company";
import Services from "./components/Services/Services";
import Destination from "./components/Destination/Destination";
import Resort from "./components/Resort/Resort";
import Banner from "./components/Banner/Banner";
import Sightseeing from "./components/Sightseeing/Sightseeing";
import Explore from "./components/Explore/Explore";
import Packages from "./components/Packages/Packages";
import TrendingPackage from "./components/TrendingPackage/TrendingPackage";
import Clients from "./components/Clinets/Clients";
import Footer from "./components/Footer/Footer";
// import TrendingPackage from "./components/Package/TrendingPackage";
function App() {
  return (
    <div className="App">
      <Hero />
      <Company />
      <Services />
      <Destination />
      <Resort />
      <Banner />
      <Sightseeing />
      <Explore />
      <TrendingPackage />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
