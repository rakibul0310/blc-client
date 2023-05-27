import React from "react";
import HeroAnimation from "../../componentes/Animation/HeroAnimation";
import Button from "../../componentes/Common/Button";

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
          <div className="hero__btn-container">
            <Button className="btn hero__btn btn__join">Join For Free</Button>
            <Button className="btn hero__btn btn__find-courses">
              Find Courses
            </Button>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </div>
  );
};

export default HeroBanner;
