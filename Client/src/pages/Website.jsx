import React from "react";
import Hero from "../components/Hero/Hero";
import Company from "../components/Company/Company";
import Services from "../components/Services/Services";
import Destination from "../components/Destination/Destination";
import Resort from "../components/Resort/Resort";
import Banner from "../components/Banner/Banner";
import Sightseeing from "../components/Sightseeing/Sightseeing";
import Explore from "../components/Explore/Explore";
import TrendingPackage from "../components/TrendingPackage/TrendingPackage";
import Clients from "../components/Clinets/Clients";
import Footer from "../components/Footer/Footer";

const Website = () => {
  return (
    <div className="Website">
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
};

export default Website;
