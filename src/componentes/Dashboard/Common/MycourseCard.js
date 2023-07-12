import React from "react";
import { ProgressBar } from "react-progressbar-fancy";
import CustomLink from "../../Common/CustomLink";

const MycourseCard = (props) => {
  return (
    <>
      <CustomLink className="course_link">
        <div>
          <div className="my__course">
            <img src={props?.coverImg} alt="" width="100%" />
            <div className="my__card__body">
              <div className="my__course__title__container">
                <h4>
                  {props.title
                    ? props.title
                    : "Anguler - The Complete Guide(2023 Edition)"}
                </h4>
              </div>
              <div className="my__course__footer">
                <div className="my__course__progress__container">
                  <ProgressBar score={80} progressColor="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomLink>
    </>
  );
};

export default MycourseCard;
