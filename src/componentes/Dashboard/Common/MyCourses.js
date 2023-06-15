import React from "react";
import CustomIcon from "../../Common/CustomIcon";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { CircleProgress } from "react-gradient-progress";
import { ProgressBar } from "react-progressbar-fancy";

const MyCourses = ({ data, limit }) => {
  return (
    <>
      <div className="my__courses__container">
        {data &&
          data.slice(0, limit).map((d) => (
            <div className="course__container">
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
                <span>4.3</span>
              </div>
              <div className="course__btn__container">
                <button className="btn__view__all">View Course</button>
              </div>
            </div>
          ))}

        {/* <div className="course__container">
          <div className="icon__container">Icon</div>
          <div className="course__title">
            <h4>History Of Bangladesh</h4>
            <span>Jhon D.</span>
          </div>
          <div className="course__traking__percentence__container">
            Precentence
          </div>
          <div className="course__rating__container">Icon 4.3</div>
          <div className="course__btn__container">
            <button>View Course</button>
          </div>
        </div> */}

        {/* <div className="course__container">
          <div className="icon__container">Icon</div>
          <div className="course__title">
            <h4>History Of Bangladesh</h4>
            <span>Jhon D.</span>
          </div>
          <div className="course__traking__percentence__container">
            Precentence
          </div>
          <div className="course__rating__container">Icon 4.3</div>
          <div className="course__btn__container">
            <button>View Course</button>
          </div>
        </div> */}
        <div className="view__all__btn__container">
          <button className="btn__view__all__arrow">
            View all Icon
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
