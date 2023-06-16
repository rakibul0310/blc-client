import React from "react";
import Analytics from "../../../componentes/Dashboard/Common/Analytics";
import PromotedCourse from "../../../componentes/Dashboard/User/PromotedCourse";
import MyCourses from "../../../componentes/Dashboard/Common/MyCourses";
import UpcominTask from "../../../componentes/Dashboard/User/UpcominTask";
import Transactions from "../../../componentes/Dashboard/Common/Transactions";
import PieChart from "../../../componentes/Dashboard/Common/PieChart";
import { coursesData } from "../../../fakeData/coursesData";
import AreaChart from "../../../componentes/Dashboard/Common/AreaChart";

const StudentHome = () => {
  return (
    <div className="student__home__container">
      <div className="left__container">
        <div className="wecome__text__container">
          <span>Hi!</span>
          <h2>Welcome to Blended Learning Center(BLC)</h2>
        </div>
        <Analytics />
        <div
          className="area__charts__container"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <AreaChart />
        </div>
        <PromotedCourse />
        <div className="courses__container">
          <h2>Courses</h2>
          <div className="course__section__container">
            <MyCourses data={coursesData} limit={3} />
          </div>
        </div>
      </div>
      <div className="right__container">
        <PieChart />
        <UpcominTask />
        <Transactions />
      </div>
    </div>
  );
};

export default StudentHome;
