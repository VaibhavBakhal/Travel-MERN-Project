import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section className="serviceSection">
      <div className="category">CATEGORY</div>
      <div className="bestService">We Offer Best Services</div>
      <div className="serviceCards">
        <div className="card">
          <img className="displayImg" src="./service1.png" alt="service" />
          <div className="backDisplayImg"></div>
          <div className="contentImg">
            <div className="cardContent">
              <span>Guided Tours</span>
              <p>sunt qui repellat saepe</p>
              <br></br>
              <p>quo velit aperiam id</p> <br></br>
              <p> aliquam placeat.</p>
            </div>
            <img className="backImg" src="./bestservice.svg" alt="box" />
          </div>
        </div>
        <div className="card">
          <img className="displayImg" src="./service2.png" alt="service" />
          <div className="backDisplayImg"></div>
          <div className="contentImg">
            <div className="cardContent">
              <span>Best Flights Options</span>
              <p>sunt qui repellat saepe</p>
              <br></br>
              <p>quo velit aperiam id</p> <br></br>
              <p> aliquam placeat.</p>
            </div>
            <img className="backImg" src="./bestservice.svg" alt="box" />
          </div>
        </div>
        <div className="card">
          <img className="displayImg" src="./service3.png" alt="service" />
          <div className="backDisplayImg"></div>
          <div className="contentImg">
            <div className="cardContent">
              <span>Religious Tours</span>
              <p>sunt qui repellat saepe</p>
              <br></br>
              <p>quo velit aperiam id</p> <br></br>
              <p> aliquam placeat.</p>
            </div>
            <img className="backImg" src="./bestservice.svg" alt="box" />
          </div>
        </div>
        <div className="card">
          <img className="displayImg" src="./service4.png" alt="service" />
          <div className="backDisplayImg"></div>
          <div className="contentImg">
            <div className="cardContent">
              <span>Medical insurance</span>
              <p>sunt qui repellat saepe</p>
              <br></br>
              <p>quo velit aperiam id</p> <br></br>
              <p> aliquam placeat.</p>
            </div>
            <img className="backImg" src="./bestservice.svg" alt="box" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
