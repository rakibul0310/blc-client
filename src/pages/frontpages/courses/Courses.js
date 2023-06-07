import React from "react";
import CourseCard from "../../../componentes/Common/CourseCard";
import { coursesData } from "../../../fakeData/coursesData";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";

const Courses = () => {
  return (
    <>
      <Header />
      <section className="courses__section">
        <div className="courses__heading__container">
          <h2>Courses Heading</h2>
        </div>
        <div className="courses__container">
          {coursesData &&
            coursesData.map((c) => <CourseCard key={c.id} {...c} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
