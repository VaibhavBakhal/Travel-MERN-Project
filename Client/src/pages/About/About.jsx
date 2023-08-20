import React from "react";
import "./About.css";
import AboutHero from "../../components/AboutComponents/Hero/aboutHero";
import AboutSightseeing from "../../components/AboutComponents/Sightseeing/AboutSightseeing";
import Grid from "../../components/AboutComponents/Grid/Grid";
import Tourplan from "../../components/AboutComponents/Tourplan/Tourplan";
import Clients from "../../components/Clinets/Clients";
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutSightseeing />
      <div className="w-wonderlustbanner wonderlust">Wanderlust</div>
      <Tourplan />
      <Grid />
      <Clients />
      <Footer />
    </div>
  );
};

export default About;
