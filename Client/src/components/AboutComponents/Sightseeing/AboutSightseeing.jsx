import React from "react";
import "./AboutSightseeing.css";

const AboutSightseeing = () => {
  return (
    <div className="w-aboutSightseeing">
      <div className="aboutSightseeing">
        <div className="leftAboutSightseeing">
          <span className="orange">Promotion</span>
          <span className="blue">
            We Provide You Best
            <br /> Europe Sightseeing Tours
          </span>
          <span>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </span>
          <button className="button">View Packages</button>
        </div>
        <div className="rightAboutSightseeing">
          <img src="about2.jpeg" alt="" />
          <img
            src="about3.png"
            alt="background"
            className="backgroundimgabout"
          />
        </div>
      </div>
    </div>
  );
};
export default AboutSightseeing;
