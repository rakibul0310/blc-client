import React from "react";
import Button from "../../componentes/Common/Button";
import topCourse1 from "../../assets/topCourses/top_course1.jpg";
import topCourse2 from "../../assets/topCourses/top_course2.jpg";
import topCourse3 from "../../assets/topCourses/top_course3.jpg";
import topCourse4 from "../../assets/topCourses/top_course4.jpg";
import avater from "../../assets/avater/avater1.jpg";
import CourseCard from "../../componentes/Common/CourseCard";

const TopCourses = () => {
  return (
    <section className="top__courses__section">
      <div className="top__courses__heading">
        <div className="top__courses__title__container">
          <h2 className="top__courses__title">Our Most Popular Courses</h2>
          <p className="top__courses__description">
            10,000+ unique online course list designs
          </p>
        </div>
        <div className="top__courses__btn__container">
          <Button className="btn__all-courses">All Courses</Button>
        </div>
      </div>
      <div className="top__courses__container">
        <CourseCard img={topCourse1} avater={avater} />
        <CourseCard img={topCourse2} avater={avater} />
        <CourseCard img={topCourse3} avater={avater} />
        <CourseCard img={topCourse4} avater={avater} />
      </div>
    </section>
  );
};

export default TopCourses;
