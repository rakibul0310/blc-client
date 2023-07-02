import React from "react";
import MycourseCard from "../../../../componentes/Dashboard/Common/MycourseCard";
import { coursesData } from "../../../../fakeData/coursesData";

const MyCourses = () => {
  return (
    <section className="courses__section dashboard__courses">
      <div className="courses__heading__container">
        <h2>My Courses</h2>
      </div>
      <div className="courses__container">
        {coursesData &&
          coursesData.map((c) => <MycourseCard key={c.id} {...c} />)}
      </div>
    </section>
  );
};

export default MyCourses;
