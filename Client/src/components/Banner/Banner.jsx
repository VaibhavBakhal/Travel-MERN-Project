import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="w-banner">
      <img src="banner1.jpeg" alt="banner" className="full-width-img" />
      <div className="textbannercontainer">
        <span className="bannerText">Let’s make your</span>
        <br /> <span className="bannerText">next holiday amazing</span>
        <img className="bannersvg" src="banner.svg" alt="linezigzag" />
      </div>
    </div>
  );
};

export default Banner;
