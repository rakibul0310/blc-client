import React from "react";
import ReactPlayer from "react-player/youtube";
import { coursesData } from "../../../fakeData/coursesData";
import ContentList from "./ContentList";
import { useBreakpoints } from "react-device-breakpoints";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findMyCourseByid } from "../../../features/slices/myCourseSlice";
import Header from "../../../pages/frontPages/Header";
import Loading from "../../Common/Loading";
import { useState } from "react";

const CourseContent = () => {
  const { id } = useParams();
  const device = useBreakpoints();
  const [currentLesson, setCurrentLesson] = useState({});
  const [currentVideo, setCurrentVideo] = useState("");
  const dispatch = useDispatch();
  const myCourse = useSelector((state) => state.myCourse);

  useEffect(() => {
    dispatch(findMyCourseByid(id));
  }, []);

  useEffect(() => {
    if (myCourse.data?.courseOutline) {
      // const current = myCourse?.data?.courseOutline?.filter(
      //   (c) => c.status === true
      // );
      // if (current?.length > 0) {
      //   current?.map(
      //     (c) =>
      //       (c?.lessonNo > currentLesson?.lessonNo || !currentLesson) &&
      //       setCurrentLesson(c) &&
      //       setCurrentVideo(c?.videoLink)
      //   );
      // } else {
      // }
      setCurrentVideo(myCourse?.data?.courseOutline[0]?.videoLink);
      setCurrentLesson(myCourse?.data?.courseOutline[0]);
    }
  }, [myCourse?.data]);

  if (myCourse.isLoading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }

  return (
    <div className="course_content_container">
      <div className="course_contant_wrapper">
        {/* // player  */}
        <div className="player_wrapper">
          <ReactPlayer
            url={currentVideo}
            controls={true}
            width={device.isTablet ? "360px" : "640px"}
            // height={}
            style={{}}
            //   onReady={()=>}
            // onPlay={()=>}
            // onEnded={()=>}
          />
          <div className="player_title_wrapper">
            <h3>{currentLesson?.title}</h3>
            <button className="btn">Bookmark</button>
          </div>
        </div>
        {/* Side bar index */}
        <div className="course_content_side_bar">
          <div className="content_list_wrapper">
            <div className="course_title_wrapper">
              <h2>{myCourse?.data?.title}</h2>
            </div>
            <div className="list_wrapper">
              {myCourse.data &&
                myCourse?.data?.courseOutline?.map((d) => (
                  <ContentList
                    key={d._id}
                    lesson={d}
                    currentLesson={currentLesson}
                    setCurrentLesson={setCurrentLesson}
                    currentVideo={currentVideo}
                    setCurrentVideo={setCurrentVideo}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
