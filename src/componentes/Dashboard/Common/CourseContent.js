import React from "react";
import ReactPlayer from "react-player/youtube";
import { coursesData } from "../../../fakeData/coursesData";
import ContentList from "./ContentList";
import { useBreakpoints } from "react-device-breakpoints";

const CourseContent = () => {
  const device = useBreakpoints();
  return (
    <div className="course_content_container">
      <div className="course_contant_wrapper">
        {/* // player  */}
        <div className="player_wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            controls={true}
            width={device.isTablet ? "360px" : "640px"}
            // height={}
            style={{}}
            //   onReady={()=>}
            // onPlay={()=>}
            // onEnded={()=>}
          />
          <div className="player_title_wrapper">
            <h3>Content Title</h3>
            <button className="btn">Bookmark</button>
          </div>
        </div>
        {/* Side bar index */}
        <div className="course_content_side_bar">
          <div className="content_list_wrapper">
            <div className="course_title_wrapper">
              <h2>Course Title</h2>
            </div>
            <div className="list_wrapper">
              {/* 
                        course outline wase list of content
                    */}
              {coursesData.map((d) => (
                <ContentList key={d.id} lesson={d?.lesson} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
