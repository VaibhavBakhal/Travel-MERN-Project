import React from "react";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="w-Destination">
      <div className="destination">
        <div>
          <div className="leftDestination">
            <div className="vertical-text">Honeymoon Packages</div>
            <div className="image-container">
              <img
                className="destination1"
                src="./destination1.png"
                alt="first"
              />
              <img
                className="destination2"
                src="./destination2.jpeg"
                alt="first"
              />
              <img
                className="destination3"
                src="./destination31.jpeg"
                alt="first"
              />
              <img
                className="destination4"
                src="./destination4.jpeg"
                alt="first"
              />
              <div className="plus">
                <div className="row1">
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign">+</span>
                  <span className="plusSign">+</span>
                </div>
                <div className="row1">
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign colorPlus">+</span>
                  <span className="plusSign">+</span>
                </div>
                <div className="row1">
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign">+</span>
                  <span className="plusSign colorPlus">+</span>
                </div>
                <div className="row1">
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign space">+</span>
                  <span className="plusSign">+</span>
                  <span className="plusSign">+</span>
                </div>
                <div className="row1">
                  <span className="plusSign colorPlus">+</span>
                  <span className="plusSign">+</span>
                  <span className="plusSign">+</span>
                  <span className="plusSign">+</span>
                  <span className="plusSign">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightDestination">
          <span className="Homeymoon">Honeymoon Specials</span>
          <span className="Romantic">Our Romantic Tropical Destinations</span>
          <span className="rightDestinationText">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
          </span>
          <span className="rightDestinationText">
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti
          </span>
          <span className="rightDestinationText">
            et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
            illum
          </span>
          <span className="rightDestinationText">aut optio quibusdam!</span>

          <button className="button">View Packages</button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
