import React from "react";
import ReactPlayer from "react-player/youtube";

const CourseContent = () => {
  return (
    <div>
      <div>
        {/* // player  */}
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            controls={true}
            //   width={}
            // height={}
            style={{}}
            //   onReady={()=>}
            // onPlay={()=>}
            // onEnded={()=>}
          />
          <div>
            <h3>Content Title</h3>
            <button>Bookmark</button>
          </div>
        </div>
        {/* Side bar index */}
        <div>
          <div>
            <div>
              <h2>Course Title</h2>
            </div>
            <div>
              {/* 
                        course outline wase list of content
                    */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
