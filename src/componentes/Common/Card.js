import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import CustomIcon from "./CustomIcon";
import { GrLocation } from "react-icons/gr";

const Card = (props) => {
  return (
    <div className="card__container">
      <img src={props.img} alt="" width={300} />
      <div className="card__body">
        <div className="date__container">
          <div className="date__icon__container">
            <CustomIcon>
              <BsCalendarDate />
            </CustomIcon>
          </div>
          <div className="date__word__container">
            {props.date ? props.date : "March 25, 2024"}
          </div>
        </div>
        <div className="card__title__container">
          <h4>
            {props.title ? props.title : "Using Laptop and PC Working at Home"}
          </h4>
        </div>
        <div className="card__details__container">
          <div>
            <CustomIcon>
              <GrLocation />
            </CustomIcon>
            <span>{props.location ? props.location : "London, UK"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
