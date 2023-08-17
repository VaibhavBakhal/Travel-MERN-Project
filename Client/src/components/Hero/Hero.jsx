import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="Hero">
      <Header />
      <div className="heroElements">
        <div className="zigzig">
          <img src="./zigzag.svg" alt="zigzag" className="zigimg" />
        </div>
        <div className="heading">
          No matter where
          <br /> you’re going to, we’ll
          <br /> take you there
        </div>
        <div className="headerMiddle heroSearch">
          <div className="searchItems">
            <form>
              <input
                type="text"
                className="selectStyle"
                placeholder="Where to?"
              />
              <span className="spacer"></span>
              {/* <label for="travelType">Travel Type:</label> */}
              <select
                id="travelType"
                className="styleDropdown"
                name="Travel Type"
                defaultValue=""
              >
                <option value="">Travel Type</option>
                <option value="Java">Air</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
                <option value="Self">Self</option>
              </select>
              <span className="spacer"></span>
              {/* <label for="durationType">Duration:</label> */}
              <select
                id="durationType"
                className="styleDropdown"
                name="Duration"
                defaultValue=""
              >
                <option value="">Duration</option>
                <option value="2 Days">2 Days</option>
                <option value="3 Days">3 Days</option>
                <option value="4 Days">4 Days</option>
                <option value="5 Days">5 Days</option>
              </select>
              <span className="spacer1"></span>
              <button className="button buttonHero">Get in Touch</button>
            </form>
          </div>
        </div>
        {/* <div className="totalPeople">
          <div className="imagesCircle">
            <img
              src="./img1.png"
              alt="imageCircle"
              className="imgCircle imgCircleTarget"
            />
            <img
              src="./img2.png"
              alt="imageCircle"
              className="imgCircle imgCircleTarget"
            />
            <img
              src="./img3.png"
              alt="imageCircle"
              className="imgCircle imgCircleTarget"
            />
            <img
              src="./img4.png"
              alt="imageCircle"
              className="imgCircle imgCircleTarget"
            />
            <img
              src="./img5.png"
              alt="imageCircle"
              className="imgCircle imgCircleTarget"
            />
            <img src="./img6.svg" alt="imageCircle" className="imgCircle" />
            <span className="imageCircle plusSign">+</span>
          </div>
          <div className="peopleBooked">
            2,500 people booked Tommorowland Event in last 24 hours
          </div>
        </div> */}
        <div className="totalPeople">
          <div className="imagesCircle">
            <img src="./img1.png" alt="imageCircle" className="imgCircle" />
            <img src="./img2.png" alt="imageCircle" className="imgCircle" />
            <img src="./img3.png" alt="imageCircle" className="imgCircle" />
            <img src="./img4.png" alt="imageCircle" className="imgCircle" />
            <img src="./img5.png" alt="imageCircle" className="imgCircle" />
            <img
              src="./img6.svg"
              alt="imageCircle"
              className="imgCircless imgSvg"
            />
            <span className="imageCircle plusSpan">+</span>
          </div>
          <div className="peopleBooked">
            2,500 people booked Tommorowland Event in the last 24 hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
