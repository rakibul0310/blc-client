import React from "react";
import cover from "../../../assets/topCourses/top_course1.jpg";

const PromotedCourse = () => {
  return (
    <>
      <div className="promoted__course__container">
        <div className="course__details__container">
          <h2>Learn Python within 30 Days</h2>
          <p>Time to become advance then others with this course</p>
          <button>Join Trial Class</button>
        </div>
        <div className="course__image__container">
          <img src={cover} alt="Course cover" width="100%" />
        </div>
      </div>
    </>
  );
};

export default PromotedCourse;
