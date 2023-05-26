import React from "react";
import HeroAnimation from "../../componentes/Animation/HeroAnimation";

const HeroBanner = () => {
  return (
    <div>
      <div className="hero__section">
        <div className="hero__description">
          <h2>
            Master the Skills to Drive your <span>Career</span>
          </h2>
          <p>
            Free online courses form the world's leading experts. Join 17
            million learners today
          </p>
          <div>
            <button>Join For Free</button>
            <button>Find Courses</button>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </div>
  );
};

export default HeroBanner;
