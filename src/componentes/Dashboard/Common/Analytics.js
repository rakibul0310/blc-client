import React from "react";
import CustomIcon from "../../../componentes/Common/CustomIcon";
import { ImStatsDots } from "react-icons/im";
import { IoStatsChartSharp } from "react-icons/io5";

const Analytics = ({
  analyticsTitle,
  analyticsDetails,
  activityTitle,
  activityDetails,
}) => {
  return (
    <>
      <div className="analytics__container">
        <div className="learnig__analysis__container">
          <div className="icon__container">
            <CustomIcon className="analysis__icons">
              <IoStatsChartSharp />
            </CustomIcon>
          </div>
          <div className="description__container">
            <span>{analyticsTitle ? analyticsTitle : "Learning Time"}</span>
            <h4>{analyticsDetails ? `${analyticsDetails} Hours` : "0 Hour"}</h4>
          </div>
        </div>

        <div className="learnig__activity__container">
          <div className="icon__container">
            <CustomIcon className="analysis__icons">
              <ImStatsDots />
            </CustomIcon>
          </div>
          <div className="description__container">
            <span>{activityTitle ? activityTitle : "My Activities"}</span>
            <h4>{activityDetails ? `${activityDetails} Task` : "0 Tasks"}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
