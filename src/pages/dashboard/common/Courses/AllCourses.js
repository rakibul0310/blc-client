import React from "react";
import CourseCard from "../../../../componentes/Common/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../../../frontPages/Header";
import Loading from "../../../../componentes/Common/Loading";
import { coursesData } from "../../../../features/slices/commonSlices/coursesSlice";

const AllCourses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(coursesData());
  }, []);

  if (courses.isLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }
  return (
    <section className="courses__section dashboard__courses">
      <div className="courses__heading__container">
        <h2>All Courses</h2>
      </div>
      <div className="courses__container">
        {courses?.data?.courses &&
          courses?.data?.courses?.map((c) => <CourseCard key={c.id} {...c} />)}
      </div>
    </section>
  );
};

export default AllCourses;
