import React from "react";
import bookmarkIcon from "../../../assets/bookmarkIcon.png";

const BookmarkCard = (props) => {
  return (
    <>
      <div className="bookmark__container">
        <img
          className="bookmark__icon"
          src={bookmarkIcon}
          alt="bookmark icon"
          width={40}
        />
        <div className="bookmark__card__container">
          <div className="course">
            <img src={props?.coverImg} alt="" width="100%" />
            <div className="card__body">
              <div className="course__title__container">
                <h4>
                  {props.title
                    ? props.title
                    : "Anguler - The Complete Guide(2023 Edition)"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookmarkCard;
