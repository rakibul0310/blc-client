import React from "react";
import { BsFillUnlockFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";

const ContentList = ({ status, lesson, time }) => {
  return (
    <div>
      <div>
        <BiLockAlt />
        {/* <BsFillUnlockFill /> */}
        {lesson ? <h3>{lesson}</h3> : <h3>Complete Javascriopt course</h3>}
      </div>
      {time ? <span>{time}</span> : <span>35 min</span>}
    </div>
  );
};

export default ContentList;
