import React, { useEffect } from "react";
import CourseCard from "../../../componentes/Common/CourseCard";
// import { coursesData } from "../../../fakeData/coursesData";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { coursesData } from "../../../features/slices/commonSlices/coursesSlice";
import Loading from "../../../componentes/Common/Loading";

const Courses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coursesData());
  }, []);

  const courses = useSelector((state) => state.courses);
  if (courses.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <section className="courses__section">
        <div className="courses__heading__container">
          <h2>All Courses</h2>
        </div>
        <div className="courses__container">
          {courses.data.courses &&
            courses.data.courses?.map((c, i) => <CourseCard key={i} {...c} />)}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
