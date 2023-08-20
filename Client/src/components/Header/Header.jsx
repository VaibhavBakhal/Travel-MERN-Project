import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <section className="header">
      <div className="h-container">
        <div className="headerLeft">
          <div className="column">
            <Link to="/">
              <div className="travel">Travel</div>
              <img src="./arrow.svg" alt="arrow" className="arrowIng" />
            </Link>
          </div>
        </div>
        <div className="headerMiddle">
          <div className="row">
            <NavLink to="/" className="style">
              Home
            </NavLink>
            <NavLink to="/about" className="style">
              About
            </NavLink>
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
