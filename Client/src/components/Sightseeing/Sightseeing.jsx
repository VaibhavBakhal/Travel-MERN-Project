import React from "react";
import "./Sightseeing.css";

const Sightseeing = () => {
  return (
    <div className="w-Sightseeing">
      <div className="Sightseeing">
        <div className="leftSightseeing">
          <div className="orange">Promotion</div>
          <div className="blueText">
            <span className="blue">We Provide You Best</span>
            <br />
            <span className="blue">Europe Sightseeing Tours</span>
          </div>
          <div className="advanceTextSightseeing">
            <span className="advanceText">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
            </span>
            <br />
            <span className="advanceText">
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti
            </span>
            <br />
            <span className="advanceText">
              et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
            </span>
            <br />
            <span className="advanceText">illum aut optio quibusdam!</span>
          </div>
          <button className="button">View Packages</button>
        </div>
        <div className="rightSightseeing">
          <div className="sightseeingImg">
            <img src="Sightseeing1.jpeg" alt="Seightseeing img" />
          </div>
          <span className="vertical-text">Breath Taking Viewes</span>
        </div>
        <div className="sightseeingimgs">
          <div className="imgPrice">
            <img src="Sightseeing2.jpeg" alt="" />
            <div className="priceElement">
              <span>$700</span>
            </div>
          </div>
          <div className="imgPrice">
            <img src="Sightseeing3.jpeg" alt="" />
            <div className="priceElement">
              <span>$800</span>
            </div>
          </div>
          <div className="imgPrice">
            <img src="Sightseeing4.jpeg" alt="" />
            <div className="priceElement">
              <span>$500</span>
            </div>
          </div>
          <div className="imgPrice">
            <img src="Sightseeing5.jpeg" alt="" />
            <div className="priceElement">
              <span>$400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sightseeing;
