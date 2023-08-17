import React from "react";
import "./TrendingPackage.css";
import { forEach } from "lodash";

const TrendingPackage = () => {
  return (
    <div className="w-trendingpackage">
      <div className="trendingTourPackage">
        <div className="orange">trendy</div>
        <div className="blue">Our Trending Tour</div>
        <div className="blue">Packages</div>
        <div className="pakages3">
          <div className="trendingpackage">
            <img className="package" src="package1.png" alt="" />
            <div className="daysandpeople">
              <div className="days8">
                <img className="date" src="date.svg" alt="" />{" "}
                <span>8 Days</span>
              </div>
              <div className="people">
                <img className="date" src="people.svg" alt="" />{" "}
                <span>30 People Going</span>
              </div>
            </div>
            <div className="countryrating">
              <span className="country">Switzerland</span>
              <div className="starhorizontal">
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
              </div>
            </div>
            <div className="locationCountry">
              <img className="date" src="country.svg" alt="" />{" "}
              <span className="continent">Europe</span>
            </div>
            <div className="pricing">
              <span className="price1">1,000 $</span>

              <span className="price2">
                <s>1,200 $</s>
              </span>
            </div>
            <span className="packagedesc">
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia amet id quod eligendi. Et labore harum non nobis ipsum
              eum molestias mollitia et corporis praesentium a laudantium
              internos.
            </span>
            <button className="button">Explore Now</button>
            <img className="countrylogo" src="countrylogo.png" alt="" />
          </div>
          {/* second package */}
          <div className="trendingpackage">
            <img className="package" src="package1.jpeg" alt="" />
            <div className="daysandpeople">
              <div className="days8">
                <img className="date" src="date.svg" alt="" />{" "}
                <span>5 Days</span>
              </div>
              <div className="people">
                <img className="date" src="people.svg" alt="" />{" "}
                <span>55 People Going</span>
              </div>
            </div>
            <div className="countryrating">
              <span className="country">Amazon</span>

              <div className="starhorizontal">
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
              </div>
            </div>
            <div className="locationCountry">
              <img className="date" src="country.svg" alt="" />{" "}
              <span className="continent">Brazil</span>
            </div>
            <div className="pricing">
              <span className="price1">1,223 $</span>
              <span className="price2">
                <s>1,400 $</s>
              </span>
            </div>
            <span className="packagedesc">
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia amet id quod eligendi. Et labore harum non nobis ipsum
              eum molestias mollitia et corporis praesentium a laudantium
              internos.
            </span>
            <button className="button">Explore Now</button>
            <img className="countrylogo" src="countrylogo2.png" alt="" />
          </div>

          {/* third package */}
          <div className="trendingpackage">
            <img className="package" src="package2.jpeg" alt="" />
            <div className="daysandpeople">
              <div className="days8">
                <img className="date" src="date.svg" alt="" />{" "}
                <span>6 Days</span>
              </div>
              <div className="people">
                <img className="date" src="people.svg" alt="" />{" "}
                <span>155 People Going</span>
              </div>
            </div>
            <div className="countryrating">
              <span className="country">Giza</span>

              <div className="starhorizontal">
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
                <img className="star" src="star.svg" alt="star" />
              </div>
            </div>
            <div className="locationCountry">
              <img className="date" src="country.svg" alt="" />{" "}
              <span className="continent">Egypt</span>
            </div>
            <div className="pricing">
              <span className="price1">1,200 $</span>

              <span className="price2">
                <s>1,300 $</s>
              </span>
            </div>
            <span className="packagedesc">
              Nam exercitationem commodi et ducimus quia in dolore animi sit
              mollitia amet id quod eligendi. Et labore harum non nobis ipsum
              eum molestias mollitia et corporis praesentium a laudantium
              internos.
            </span>
            <button className="button">Explore Now</button>
            <img className="countrylogo" src="countrylogo3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPackage;
