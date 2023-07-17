import React from "react";
import CustomIcon from "../../Common/CustomIcon";
import { AiOutlineArrowRight } from "react-icons/ai";

const UpcominTask = ({ data }) => {
  return (
    <>
      <div className="upcoming__tasks__container">
        <div className="container__heading">
          <h2>Upcoming Task</h2>
        </div>
        {data.length > 0 ? (
          data.map((t, i) => (
            <div key={i} className="task">
              <h4>{`Lesson-${t.lessonNo}: ${t.title}`}</h4>
              <span>{t.course_id}</span>
            </div>
          ))
        ) : (
          <div>
            <span style={{ width: "80%", textAlign: "center", margin: "1rem" }}>
              No Task Yet!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default UpcominTask;
