import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <section className="header">
      <div className="h-container">
        <div className="headerLeft">
          <div className="column">
            <div className="travel">Travel</div>
            <img src="./arrow.svg" alt="arrow" className="arrowIng" />
          </div>
        </div>
        <div className="headerMiddle">
          <div className="row">
            <div className="style">Home</div>
            <div className="style">About</div>
            <div className="style dropdown">
              Services
              <div className="dropdown-content">
                <div>Honeymoon Packages</div>
                <div>Tours Packages</div>
                <div>Musical Events</div>
                <div>Build Package</div>
              </div>
              <div className="dropdownSvg">
                <img src="./dropdown.svg" alt="svg" />
              </div>
            </div>
            <div className="style">Upcoming Packages</div>
          </div>
        </div>
        <div className="headerLeft">
          <button className="button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
