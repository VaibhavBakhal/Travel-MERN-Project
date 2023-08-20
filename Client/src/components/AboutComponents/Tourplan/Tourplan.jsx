import React from "react";
import "./Tourplan.css";

const Tourplan = () => {
  return (
    <div className="w-tourplan">
      <div className="tourplan">
        <div className="lefttourplan">
          <img src="tourplan1.png" alt="tourplan" />
        </div>
        <div className="righttourplan">
          <span className="orange">Trend</span>
          <span className="blue">Our Popular Tour Plans</span>
          <span className="tourtext">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium.
          </span>
          <div className="percentageflex">
            <div className="percentage">
              <img className="backpercentage" src="tourring.svg" alt="" />
              <img className="frontpercentage" src="tourring1.svg" alt="" />
              <span className="tourringtext">78%</span>
              <span className="tourtextdown">vacation</span>
            </div>
            <div className="percentage">
              <img className="backpercentage" src="tourring.svg" alt="" />
              <img className="frontpercentage2" src="tourring2.svg" alt="" />
              <span className="tourringtext">55%</span>
              <span className="tourtextdown">Honeymoon</span>
            </div>
            <div className="percentage">
              <img className="backpercentage" src="tourring.svg" alt="" />
              <img className="frontpercentage2" src="tourring3.svg" alt="" />
              <span className="tourringtextinside">30%</span>
              <span className="tourtextdown">Musical Events</span>
            </div>
          </div>
          <img className="shell" src="tourplan2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tourplan;
