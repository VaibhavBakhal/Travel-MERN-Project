import React from "react";
import "./Resort.css";

const Resort = () => {
  return (
    <div className="w-resort">
      <div className="resort">
        <div className="leftResort">
          <span className="orange">Fast & Easy</span>
          <br />
          <span className="booking">Get Your Favourite </span>
          <br />
          <span className="booking">Resort Bookings</span>
          <br />
          <div className="checkAvail">
            <div className="check">
              <div className="steps">
                <img src="./resort1.svg" alt="icon" />
              </div>
              <div className="choose">
                <div className="point">Choose Destination</div>
                <span className="desc">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <br />
                <span className="desc">
                  adipiscing elit. Urna, tortor tempus.
                </span>
              </div>
            </div>
            <div className="check">
              <div className="steps">
                <img src="./resort2.svg" alt="icon" />
              </div>
              <div className="choose">
                <div className="point">Check Availability</div>
                <span className="desc">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <br />
                <span className="desc">
                  adipiscing elit. Urna, tortor tempus.
                </span>
              </div>
            </div>
            <div className="check">
              <div className="steps">
                <img src="./resort3.svg" alt="icon" />
              </div>
              <div className="choose">
                <div className="point">Let’s Go</div>
                <span className="desc">
                  Lorem ipsum dolor sit amet, consectetur
                </span>
                <br />
                <span className="desc">
                  adipiscing elit. Urna, tortor tempus.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rightResort">
          <div className="cardResort">
            <div className="image-containerResort">
              <img src="resort4.jpeg" alt="User Image" />
            </div>
            <div className="user-detailsResort">
              <h3>Trip to Hawaii </h3>
              <p>14-29 June | by JR Martinax</p>
            </div>
            <div className="icon-rowResort">
              <div className="iconResort">
                <div className="iconbackside"></div>
                <img src="resort5.svg" alt="Icon 1" />
              </div>
              <div className="iconResort">
                <div className="iconbackside"></div>
                <img src="resort6.svg" alt="Icon 2" />
              </div>
              <div className="iconResort">
                <div className="iconbackside"></div>
                <img src="resort7.svg" alt="Icon 3" />
              </div>
            </div>

            <div className="heart-rowResort">
              <div className="iconResortlastline">
                <img src="resort8.svg" alt="Icon 4" />
              </div>
              <div className="peopleResort">60 people are interested</div>
              <div className="heartResort">
                <span>&#10084;</span>
              </div>
            </div>
          </div>
          <div className="ongoingtripresort">
            <div className="leftongoingtrip">
              <img src="resort9.png" alt="ongling img" />
            </div>
            <div className="rightongoingtrip">
              <span className="ongoingresort">Ongoing</span>
              <span className="triptorome">Trip to rome</span>
              <div>
                <span
                  className="completed40"
                  style={{ color: "#DF6951", paddingRight: "5px" }}
                >
                  40%
                </span>
                <span className="completed40">completed</span>
              </div>
              <div className="meter">
                <span className="chart11">
                  <span style={{ width: "40%" }}></span>
                </span>
              </div>
            </div>
          </div>
          <div className="backgroundblur"></div>
          <div className="airplane">
            <img src="resort10.png" alt="airplane" />
          </div>
          <div className="plus">
            <div className="row1">
              <span className="plusSign space colorPlus">+</span>
              <span className="plusSign space">+</span>
              <span className="plusSign space">+</span>
              <span className="plusSign">+</span>
              <span className="plusSign">+</span>
            </div>
            <div className="row1">
              <span className="plusSign space">+</span>
              <span className="plusSign space">+</span>
              <span className="plusSign space">+</span>
              <span className="plusSign ">+</span>
              <span className="plusSign">+</span>
            </div>
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
              <span className="plusSign">+</span>
              <span className="plusSign">+</span>
              <span className="plusSign colorPlus">+</span>
              <span className="plusSign">+</span>
              <span className="plusSign">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resort;
