import React from "react";
import { FaUserGraduate, FaBookReader } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { IconContext } from "react-icons";

const Banner = () => {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <section className="banner__section">
        <div className="banner__section-title">
          <h2>Why learn with our courses?</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="banner__container">
          <div className="banner">
            <FaBookReader />
            <h3 className="banner__title">01. Learn</h3>
            <p className="banner__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.
            </p>
          </div>
          <div className="banner">
            <FaUserGraduate />
            <h3 className="banner__title">02. Graduate</h3>
            <p className="banner__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati?
            </p>
          </div>
          <div className="banner">
            <BsPersonWorkspace />
            <h3 className="banner__title">03. Work</h3>
            <p className="banner__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis.
            </p>
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Banner;
