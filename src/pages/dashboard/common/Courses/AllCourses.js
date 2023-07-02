import React from "react";
import { coursesData } from "../../../../fakeData/coursesData";
import CourseCard from "../../../../componentes/Common/CourseCard";

const AllCourses = () => {
  return (
    <section className="courses__section dashboard__courses">
      <div className="courses__heading__container">
        <h2>All Courses</h2>
      </div>
      <div className="courses__container">
        {coursesData &&
          coursesData.map((c) => <CourseCard key={c.id} {...c} />)}
      </div>
    </section>
  );
};

export default AllCourses;
