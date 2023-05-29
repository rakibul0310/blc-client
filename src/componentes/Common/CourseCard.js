import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlClock } from "react-icons/sl";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import StarRatings from "react-star-ratings";
// import "../../styles/components/_courseCard.scss";

const CourseCard = (props) => {
  return (
    <IconContext.Provider value={{ className: "react-icon" }}>
      <div className="course">
        <img src={props.img} alt="" width={300} />
        <div className="card__body">
          <div className="course__rating__container">
            <div className="rating__star">
              <StarRatings
                rating={props.rating ? props.rating : 4.5}
                starDimension="20px"
                starRatedColor="#F2C47A"
              />
            </div>
            <div className="rating__count">
              {props.ratingCount ? props.ratingCount : "(45)"}
            </div>
          </div>
          <div className="course__title__container">
            <h4>
              {props.title
                ? props.title
                : "Anguler - The Complete Guide(2023 Edition)"}
            </h4>
          </div>
          <div className="course__details__container">
            <div>
              <HiOutlineDocumentText />
              <span>{props.lesson ? props.lesson : "12 Lessons"}</span>
            </div>
            <div>
              <SlClock />
              <span>{props.duration ? props.duration : "9 Hours"}</span>
            </div>
            <div>
              <TbBrandGoogleAnalytics />
              <span>{props.level ? props.level : "All Levels"}</span>
            </div>
          </div>
          <div className="course__footer">
            <div className="course__teacher-info__container">
              <div className="info__container">
                <img className="avater" src={props.avater} alt="" />
                <span className="name">
                  {props.teacherName ? props.teacherName : "Robert FOx"}
                </span>
              </div>
            </div>
            <div className="course__pricing__container">
              <span className="reguler__price">
                {props.rePrice ? props.rePrice : "$1200"}
              </span>
              <span className="offer__price">
                {props.ofPrice ? props.ofPrice : "$400"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default CourseCard;
