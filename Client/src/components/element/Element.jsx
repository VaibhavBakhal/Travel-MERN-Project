import React from "react";
import "./element.css";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Element = ({ card }) => {
  const navigate = useNavigate();
  const formattedDate = dayjs(card.departureDate)
    .locale("en")
    .format("DD MMMM YYYY");

  const element =
    // "https://asset.cloudinary.com/dmduftwz1/c68584e36da64545a94dc3e6e54b2661";
    "https://res.cloudinary.com/dmduftwz1/image/upload/v1691432981/yugzfwe7xxuvu4b5n2ml.jpg";
  return (
    <div
      className="w-element"
      onClick={() => navigate(`../packages/${card.id}`)}
    >
      <div className="elementcard">
        <img src={element} alt="" />
        <div className="peoplecard">
          <div className="dates">
            <img src="element2.svg" alt="date" />
            <span>{formattedDate}</span>
          </div>

          <div className="peoplevisiting">
            <img src="element3.svg" alt="" />
            <span>120+ People</span>
          </div>
        </div>
        <span className="bluecolor">{card.destination}</span>
        <span className="elementcarddesc">
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </span>
        <div className="ratingamount">
          <span>{card.price} $</span>
          <div className="rating">
            <img src="star.svg" alt="" />
            <span>{card.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Element;
