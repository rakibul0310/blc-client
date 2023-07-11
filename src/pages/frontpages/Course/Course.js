import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ContentList from "../../../componentes/Dashboard/Common/ContentList";
import { useDispatch, useSelector } from "react-redux";
import { courseData } from "../../../features/slices/commonSlices/courseSlice";
import Button from "../../../componentes/Common/Button";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import Loading from "../../../componentes/Common/Loading";

const Course = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course?.data?.course);

  useEffect(() => {
    dispatch(courseData(params.id));
  });

  return (
    <>
      <Header />
      <div className="main__course__container">
        {/*  */}
        <div className="left__containt">
          <div className="coverimg__container">
            <img src={course?.coverImg} alt="cover" />
          </div>
          <div className="details__container">
            <h2>{course?.title}</h2>
            <div className="info__container">
              <span>Duration: {course?.duration}</span>
              <span>Total Lessons: {course?.totalLessons} Lessons</span>
            </div>
            <p>{course?.description}</p>
          </div>
        </div>
        {/*  */}
        <div className="right__containt">
          <h2>{course?.title}</h2>
          <div className="course__rating__container">
            <div className="rating__star">
              <StarRatings
                rating={course?.rating ? course?.rating : 4.5}
                starDimension="20px"
                starRatedColor="#F2C47A"
              />
            </div>
            <div className="rating__count">
              {course?.ratingCount ? `(${course?.ratingCount})` : "(45)"}
            </div>
          </div>
          <div className="button__container">
            <Button className="btn">Buy Now ${course?.offerPrice}</Button>
          </div>
          <div className="list_wrapper">
            {course?.courseOutline?.map((d, i) => (
              <ContentList key={i} lesson={d?.title} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
