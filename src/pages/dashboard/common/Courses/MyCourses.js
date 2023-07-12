import React from "react";
import MycourseCard from "../../../../componentes/Dashboard/Common/MycourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "../../../frontPages/Header";
import Loading from "../../../../componentes/Common/Loading";
import { findMyCourse } from "../../../../features/slices/myCoursesSlice";

const MyCourses = () => {
  const dispatch = useDispatch();
  const myCourse = useSelector((state) => state.myCourses);

  useEffect(() => {
    dispatch(findMyCourse());
  }, []);

  if (myCourse.isLoading) {
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
        <h2>My Courses</h2>
      </div>
      <div className="courses__container">
        {myCourse?.data &&
          myCourse?.data?.map((c) => <MycourseCard key={c.id} {...c} />)}
      </div>
    </section>
  );
};

export default MyCourses;
