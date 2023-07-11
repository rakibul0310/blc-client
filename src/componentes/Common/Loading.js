import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-text">
        <span>B</span>
        <span>L</span>
        <span>C</span>
      </div>
      <div className="loading-waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </div>
  );
};

export default Loading;
