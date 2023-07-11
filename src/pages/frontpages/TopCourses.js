import React from "react";
import CourseCard from "../../componentes/Common/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { coursesData } from "../../features/slices/commonSlices/coursesSlice";
import CustomLink from "../../componentes/Common/CustomLink";

const TopCourses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coursesData());
  }, []);

  const courses = useSelector((state) => state.courses.data.courses);
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
          <CustomLink className="btn__all-courses" href="/courses">
            All Courses
          </CustomLink>
        </div>
      </div>
      <div className="top__courses__container">
        {courses &&
          courses?.slice(0, 4)?.map((c, i) => <CourseCard key={i} {...c} />)}
      </div>
    </section>
  );
};

export default TopCourses;
