import React from "react";
import { ProgressBar } from "react-progressbar-fancy";

const MycourseCard = (props) => {
  return (
    <div>
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
          <div className="course__progress__container">
            <ProgressBar score={80} progressColor="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MycourseCard;
