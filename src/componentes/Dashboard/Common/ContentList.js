import React from "react";
import { BsFillUnlockFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";

const ContentList = ({
  lesson,
  currentLesson,
  setCurrentLesson,
  setCurrentVideo,
}) => {
  const dispatch = useDispatch();
  const handleLessonChange = (e) => {
    e.preventDefault();
    // send requiest to change currentLesson's status to true
    // dispatch()
    setCurrentLesson(lesson);
    setCurrentVideo(lesson?.videoLink);
  };
  return (
    <div
      className="content_list_container"
      onClick={() =>
        setCurrentLesson(lesson) && setCurrentVideo(lesson?.videoLink)
      }
    >
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
