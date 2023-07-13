import React from "react";
import { BsFillUnlockFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";

const ContentList = ({ lesson }) => {
  return (
    <div className="content_list_container">
      <div className="list_title_wrapper">
        <BiLockAlt />
        {/* <BsFillUnlockFill /> */}
        {lesson ? (
          <h3>{lesson.title}</h3>
        ) : (
          <h3>Complete Javascriopt course</h3>
        )}
      </div>
      {lesson?.time ? <span>{lesson?.time}</span> : <span>35 min</span>}
    </div>
  );
};

export default ContentList;
