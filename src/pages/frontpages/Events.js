import React from "react";
import Card from "../../componentes/Common/Card";
import topCourse1 from "../../assets/topCourses/top_course1.jpg";
import topCourse2 from "../../assets/topCourses/top_course2.jpg";
import topCourse3 from "../../assets/topCourses/top_course3.jpg";
import topCourse4 from "../../assets/topCourses/top_course4.jpg";

const Events = () => {
  return (
    <section className="events__section">
      <div className="events__heading">
        <div className="events__title__container">
          <h2 className="events__title">Upcoming Events</h2>
          <p className="events__description">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className="events__container">
        <Card img={topCourse1} />
        <Card img={topCourse2} />
        <Card img={topCourse3} />
        <Card img={topCourse4} />
      </div>
    </section>
  );
};

export default Events;
