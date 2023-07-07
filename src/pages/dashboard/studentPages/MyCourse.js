import React from "react";
import CourseContent from "../../../componentes/Dashboard/Common/CourseContent";
// import { useLocation, useParams, useSearchParams } from "react-router-dom";

const MyCourse = () => {
  // const { id } = useParams();
  // const params = useLocation();
  // console.log(params);
  return (
    <div className="my_course_container">
      <CourseContent />
    </div>
  );
};

export default MyCourse;
