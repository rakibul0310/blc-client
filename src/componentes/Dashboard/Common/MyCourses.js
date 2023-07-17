import React from "react";
import CustomIcon from "../../Common/CustomIcon";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { ProgressBar } from "react-progressbar-fancy";
import { useNavigate } from "react-router-dom";

const MyCourses = ({ data, limit }) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <>
      <div className="my__courses__container">
        {data.length > 0 ? (
          data.slice(0, limit).map((d, i) => (
            <div className="course__container" key={i}>
              <div className="icon__container">
                <CustomIcon className="my__courses__course__icon">
                  <MdOutlineVideoLibrary />
                </CustomIcon>
              </div>
              <div className="course__title">
                <h4>
                  {d.title
                    ? `${d.title.slice(0, 16)}...`
                    : "History Of Bangladesh"}
                </h4>
                <span>{d.author ? d.author : "Jhon D."}</span>
              </div>
              <div className="course__traking__percentence__container">
                <ProgressBar score={80} progressColor="blue" />
              </div>
              <div className="course__rating__container">
                <CustomIcon className="start__icon">
                  <AiFillStar />
                </CustomIcon>
                <span>{d.rating}</span>
              </div>
              <div className="course__btn__container">
                <button className="btn__view__all">View Course</button>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <span style={{ width: "80%", textAlign: "center", margin: "1rem" }}>
              No Course Yet. Enroll Some Courses!
            </span>
          </div>
        )}
        <div className="view__all__btn__container">
          <button
            className="btn__view__all__arrow"
            onClick={() => navigate("/dashboard/courses/my-courses")}
          >
            View all
            <CustomIcon className="btn__arrow">
              <AiOutlineArrowRight />
            </CustomIcon>
          </button>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
