import React from "react";
import CourseContent from "../../../componentes/Dashboard/Common/CourseContent";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const MyCourse = () => {
  const { id } = useParams();
  const params = useLocation();
  console.log(params);
  return (
    <div>
      <CourseContent />
      <h2>Params {id}</h2>
    </div>
  );
};

export default MyCourse;
