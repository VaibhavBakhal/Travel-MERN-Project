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
                <NavLink
                  to="/honeymoon"
                  className="styledropdown"
                  state={
                    {
                      span1: "Search Honeymoon Tour",
                      span2: "Travel With us",
                      background1: "./honeymoon.png",
                    } // You can pass any data here
                  }
                >
                  Honeymoon Packages
                </NavLink>
                <NavLink
                  to="/packages"
                  className="styledropdown"
                  state={
                    {
                      span1: "Search Tour",
                      span2: "Travel With us",
                      background1: "./honeymoon.png",
                    } // You can pass any data here
                  }
                >
                  Tours Packages
                </NavLink>
                <NavLink
                  to="/events"
                  className="styledropdown"
                  state={
                    {
                      span1: "Search Events Tour",
                      span2: "Travel With us",
                      background1: "./honeymoon.png",
                    } // You can pass any data here
                  }
                >
                  Musical Events
                </NavLink>
                <NavLink
                  to="/makeyourownpackage"
                  className="styledropdown"
                  state={
                    {
                      span1: "create your own Tour",
                      span2: "Travel With us",
                      background1: "./honeymoon.png",
                    } // You can pass any data here
                  }
                >
                  Build Package
                </NavLink>
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
