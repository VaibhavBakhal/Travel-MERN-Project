import React from "react";
import "./AboutHero.css";
import Header from "../../Header/Header";
const AboutHero = ({ span1, span2, background1 }) => {
  return (
    <div
      className="w-aboutHero"
      style={{ backgroundImage: `url(${background1})` }}
    >
      <Header />
      <div className="aboutustext">
        <span>{span1}</span>
        <span>{span2}</span>
      </div>
    </div>
  );
};

export default AboutHero;
