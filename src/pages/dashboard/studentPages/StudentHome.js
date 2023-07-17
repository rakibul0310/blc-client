import React from "react";
import Analytics from "../../../componentes/Dashboard/Common/Analytics";
import PromotedCourse from "../../../componentes/Dashboard/User/PromotedCourse";
import MyCourses from "../../../componentes/Dashboard/Common/MyCourses";
import UpcominTask from "../../../componentes/Dashboard/User/UpcominTask";
import Transactions from "../../../componentes/Dashboard/Common/Transactions";
import PieChart from "../../../componentes/Dashboard/Common/PieChart";
import { coursesData } from "../../../fakeData/coursesData";
import AreaChart from "../../../componentes/Dashboard/Common/AreaChart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLearningTime } from "../../../features/slices/learningTimeSlice";
import { getTotalTask } from "../../../features/slices/totalTaskSlice";
import { getLatestCourses } from "../../../features/slices/latestCourseSlice";
import { getUpcomingTask } from "../../../features/slices/upcomingTaskSlice";
import { getLatestTransactions } from "../../../features/slices/latestTransactionSlice";

const StudentHome = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const learningTime = useSelector((state) => state.learningTime);
  const totalTask = useSelector((state) => state.totalTask);
  const latestCourse = useSelector((state) => state.latestCourse);
  const upcomingTask = useSelector((state) => state.upcomingTask);
  const latestTransactions = useSelector((state) => state.upcomingTask);

  useEffect(() => {
    if (userInfo?.data) {
      dispatch(getLearningTime(userInfo?.data?.token));
      dispatch(getTotalTask(userInfo?.data?.token));
      dispatch(getLatestCourses(userInfo?.data?.token));
      dispatch(getUpcomingTask(userInfo?.data?.token));
      dispatch(getLatestTransactions(userInfo?.data?.token));
    }
  }, [userInfo?.data]);

  return (
    <div className="student__home__container">
      <div className="left__container">
        <div className="wecome__text__container">
          <span>Hi!</span>
          <h2>Welcome to Blended Learning Center(BLC)</h2>
        </div>
        {learningTime?.data > 0 && totalTask?.data > 0 ? (
          <Analytics
            analyticsDetails={learningTime?.data}
            activityDetails={totalTask?.data}
          />
        ) : (
          <Analytics analyticsDetails={0} activityDetails={0} />
        )}
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
            {latestCourse?.data && (
              <MyCourses data={latestCourse?.data} limit={3} />
            )}
          </div>
        </div>
      </div>
      <div className="right__container">
        <PieChart />
        <UpcominTask data={upcomingTask?.data} />
        <Transactions data={latestTransactions?.data} />
      </div>
    </div>
  );
};

export default StudentHome;
