import React from "react";
import CustomIcon from "../../Common/CustomIcon";
import { AiOutlineArrowRight } from "react-icons/ai";

const UpcominTask = () => {
  return (
    <>
      <div className="upcoming__tasks__container">
        <div className="container__heading">
          <h2>Upcoming Task</h2>
        </div>
        <div className="task">
          <h4>Lesson-3: Introduction to C++</h4>
          <span>By Jhon D.</span>
        </div>
        <div className="task">
          <h4>Lesson-3: Introduction to C++</h4>
          <span>By Jhon D.</span>
        </div>
        <div className="task">
          <h4>Lesson-3: Introduction to C++</h4>
          <span>By Jhon D.</span>
        </div>
        {/* <div className="view__all__btn__container">
          <button className="btn__view__all__arrow">
            View all Tasks
            <CustomIcon className="btn__arrow">
              <AiOutlineArrowRight />
            </CustomIcon>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default UpcominTask;
