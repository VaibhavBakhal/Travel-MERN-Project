import React, { useEffect, useState } from "react";
import "./Package.css";
import { useLocation, useNavigate } from "react-router-dom";
import { getPackage } from "../../utils/api";
import { useQuery } from "react-query";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { GrLocation, GrGallery } from "react-icons/gr";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import Timelines from "../../components/Timeline/Timelines";
import { ErrorBoundary } from "react-error-boundary";

const Package = () => {
  // to get data after the properties
  // http://localhost:5173/packages/64cba4558cf2df793e4f2a52
  // we created the id using use useLocation
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [error, setError] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error1, setError1] = useState("");

  const handleEmail1Change = (e) => {
    setEmail1(e.target.value);
    checkEmailsMatch(e.target.value, email2);
  };

  const handleEmail2Change = (e) => {
    setEmail2(e.target.value);
    checkEmailsMatch(email1, e.target.value);
  };

  const checkEmailsMatch = (value1, value2) => {
    if (value1 === value2) {
      setError("");
    } else {
      setError("Emails do not match");
    }
  };
  const handlePhoneNoChange = (e) => {
    const value = e.target.value;
    // Remove non-numeric characters
    const numericValue = value.replace(/[^0-9]/g, "");

    setPhoneNo(numericValue);

    if (numericValue.length === 10) {
      setError1("");
    } else {
      setError1("Phone number must be 10 digits");
    }
  };
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  console.log(id);
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getPackage(id)
  );
  const rating = data?.rating;
  function generateStars(num) {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return stars;
  }
  return (
    <div className=" w-packages flexColCenter paddings">
      <div className="filterPackages flexStart perticularpackage">
        <div className="filterStyle">
          <HiOutlineInformationCircle size={30} />
          <span className="filtertext">Information</span>
        </div>
        <div className="filterStyle">
          <img src="/tourplan.svg" alt="" />
          <span className="filtertext">Tour Plan</span>
        </div>
        <div className="filterStyle">
          <GrLocation size={25} />
          <span className="filtertext">Location</span>
        </div>
        <div className="filterStyle">
          <GrGallery size={25} />
          <span className="filtertext">Gallary</span>
        </div>
      </div>
      <div className="databooking">
        <div className="flexColStart packageinfo">
          <div className="information">
            <div className="countryprice">
              <span className="country describepackage">
                {data?.destination}
              </span>
              <span className="price1">{data?.price}$</span>
              <span className="percouple">/ per Couple</span>
            </div>
            <div className="rating1">
              {generateStars(rating)} {""}(2.3k review)
            </div>
          </div>
          <div className="desc1">
            <span className="datadesc">{data?.desc}</span>
          </div>
          <div className="itinerary-card">
            <div className="moredetails">
              <span className="orangedetails">Destination</span>
              <span className="blackdetails">: {data?.destination}</span>
            </div>
            <div className="moredetails">
              <span className="orangedetails">Departure</span>
              <span className="blackdetails">: {data?.departureLocation}</span>
            </div>
            <div className="moredetails">
              <span className="orangedetails">Departure Time</span>
              <span className="blackdetails">
                : Approximately {data?.departureTime}
              </span>
            </div>
            <div className="moredetails">
              <span className="orangedetails">Return Time</span>
              <span className="blackdetails">
                : Approximately {data?.returnTime}
              </span>
            </div>
            <div className="moredetails">
              <span className="orangedetails">Dress Code</span>
              <span className="blackdetails"> : {data?.dressCode}</span>
            </div>
            <div className="moredetails">
              <span className="orangedetails">Not Included </span>

              <span className="blackdetails items2">
                {data?.notIncluded.map((code) => (
                  <div key={code}>
                    <FaRegTimesCircle /> <span>{code}</span>
                  </div>
                ))}
              </span>
            </div>
            <div className="moredetails">
              <span className="orangedetails">Included </span>

              <span className="blackdetails items2">
                {data?.included.map((code) => (
                  <div key={code}>
                    <AiOutlineCheckCircle />{" "}
                    <span className="iconspan">{code}</span>
                  </div>
                ))}
              </span>
            </div>
          </div>
          <div className="fromgallery">
            <span className="blue">From our gallery</span>
            <span className="datadesc">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor
              similique ut quasi maxime ut deserunt autem At praesentium
              voluptatem aut libero nisi.
            </span>
            <div className="image-gallery">
              <div className="top-row">
                <img src="/gallary1.png" alt="" />
                <img src="/gallary2.png" alt="" />
                <img src="/gallary3.png" alt="" />
              </div>
              <div className="bottom-row">
                <img src="/gallary4.png" alt="" />
                <img src="/gallary5.png" alt="" />
                <img src="/gallary6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bookingpackage bookingform ">
          <form>
            <span className="blue">Book This Tour</span>
            <span className="bookingtext">
              Ex optio sequi et quos praesentium in nostrum labore nam rerum
              iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
            </span>
            <input type="text" placeholder="Name" className="whereto" />
            {/* <input type="email" placeholder="Email" className="whereto" />
            <input
              type="email"
              placeholder="Confirm Email"
              className="whereto"
            /> */}
            <input
              type="email"
              placeholder="Email"
              value={email1}
              onChange={handleEmail1Change}
              className="whereto"
            />
            <input
              type="email"
              placeholder="Confirm Email"
              value={email2}
              onChange={handleEmail2Change}
              className="whereto"
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <input
              type="text"
              name="phoneNo"
              placeholder="Phone No"
              value={phoneNo}
              onChange={handlePhoneNoChange}
              className="whereto"
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
            {error1 && <div style={{ color: "red" }}>{error1}</div>}

            <input type="date" className="whereto" />
            <input
              type="number"
              placeholder="Number of tickets"
              className="whereto"
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              placeholder="Message"
              className="whereto"
            />
          </form>
          <div className="bookingbutton">
            <button className="button ">Check Availability</button>
            <button className="button ">Book Now</button>
          </div>
        </div>
      </div>
      <Timelines data={data} />
    </div>
  );
};

export default Package;
