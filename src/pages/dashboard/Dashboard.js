import React from "react";
import Footer from "../../componentes/Footer/Footer";
import Sidebar from "../../componentes/Dashboard/Sidebar";
import NavBar from "../../componentes/Dashboard/NavBar";

// sidebar | Header
// sidebar | maincontent
// ------ Footer -----

const Dashboard = () => {
  return (
    <>
      {/* main container */}
      <div className="main__container">
        {/* sidebar section */}
        <div className="sidebar__section">
          {/* sidebar component here  */}
          <Sidebar />
        </div>
        {/* header and main content container  */}
        <div className="main__content__section">
          {/* header here  */}
          <NavBar />
          {/* main content here  */}
          <div className="main__content__container">main content here</div>
          {/* footer here  */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
