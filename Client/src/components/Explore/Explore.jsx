import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="w-explore">
      <div className="explore">
        <div className="leftExplore">
          <img className="exploreImg" src="explore1.jpeg" alt="explore img" />
          <div className="containText">
            <span className="promotion">Promotion</span>
            <span className="explorenature">Explore Nature</span>
            <img src="explore3.svg" alt="" />
            <button>View Packages</button>
          </div>
        </div>
        <div className="rightExplore">
          <img className="exploreImg" src="explore2.jpeg" alt="explore img" />
          <div className="containText">
            <span className="promotion">Promotion</span>
            <span className="explorenature">Explore Cities</span>
            <img src="explore4.svg" alt="" />
            <button>View Packages</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
