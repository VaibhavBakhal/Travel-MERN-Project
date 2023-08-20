import React from "react";
import "./Grid.css";

const Grid = () => {
  return (
    <div className="w-gridimg">
      <div className="gridheadings">
        <span className="orange">Promotion</span>
        <span className="blue">Our International Packages</span>
      </div>
      <div className="grid-container">
        <div className="grid-item grid1">
          <span>Barcelona</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid2">
          <span>Switzerland</span>
          <span>$840</span>
        </div>
        <div className="grid-item item3 grid3">
          <span>Rio de Jenero</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid4">
          <span>Tommorow land</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid5">
          <span>Los Angelas</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid6">
          <span>India</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid7">
          <span>Barcelona</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid8">
          <span>Maldives</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid9">
          <span>Barcelona</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid10">
          <span>IceLand</span>
          <span>$840</span>
        </div>
        <div className="grid-item grid11">
          <span>Nepal</span>
          <span>$840</span>
        </div>
      </div>
    </div>
  );
};

export default Grid;
