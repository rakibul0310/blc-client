import React, { useState } from "react";
import Footer from "../../componentes/Footer/Footer";
import Sidebar from "../../componentes/Dashboard/Sidebar";
import NavBar from "../../componentes/Dashboard/NavBar";
import { useBreakpoints } from "react-device-breakpoints";
import { useEffect } from "react";
import StudentHome from "./studentPages/StudentHome";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [triggred, setTriggred] = useState(false);

  const device = useBreakpoints();
  const navigate = useNavigate();

  useEffect(() => {
    if (device.isTablet) {
      setSidebarToggle(true);
    }
  }, [device.isTablet]);

  useEffect(() => {
    const token = localStorage.getItem("blcToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      {/* <MatchMediaBreakpoints breakpoints={breakpoints}> */}
      {/* main container */}
      <div className="main__container">
        {/* sidebar section */}

        <div
          className={`${
            device.isTablet && !triggred
              ? "sidebar__section_hide"
              : "sidebar__section"
          } ${sidebarToggle ? "toggled" : ""}`}
        >
          {/* sidebar component here  */}

          <Sidebar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
        </div>
        {/* header and main content container  */}
        <div
          className={`${
            device.isTablet && !triggred
              ? "main__content__section_wide"
              : "main__content__section"
          } ${sidebarToggle ? "toggled" : ""}`}
        >
          {/* header here  */}
          <NavBar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
            setTriggred={setTriggred}
          />
          {/* main content here  */}
          <div className="main__content__container">
            {/* main content here */}
            <StudentHome />
          </div>
          {/* footer here  */}
          <Footer />
        </div>
      </div>
      {/* </MatchMediaBreakpoints> */}
    </>
  );
};

export default Dashboard;
