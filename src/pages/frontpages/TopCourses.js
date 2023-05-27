import React from "react";
import Button from "../../componentes/Common/Button";

const TopCourses = () => {
  return (
    <section className="top__courses__section">
      <div className="top__courses__heading">
        <div className="top__courses__title__container">
          <h2 className="top__courses__title">Our Most Popular Courses</h2>
          <p className="top__courses__description">
            10,000+ unique online course list designs
          </p>
        </div>
        <div className="top__courses__btn__container">
          <Button>All Courses</Button>
        </div>
      </div>
      <div className="top__courses__container">
        <div className="course">
          <div className="course__rating__container">
            <div>*****</div>
            <div>(45)</div>
          </div>
          <div className="course__title__container">
            <h4>Anguler - The Complete Guide(2023 Edition)</h4>
          </div>
          <div className="course__details__container">
            <div>
              icons
              <span>12 Lessons</span>
            </div>
            <div>
              icons
              <span>9 Hours</span>
            </div>
            <div>
              icons
              <span>All Levels</span>
            </div>
          </div>
          <div className="course__footer">
            <div className="course__teacher-info__container">
              <div>
                Avater
                <span>Robert FOx</span>
              </div>
            </div>
            <div className="course__pricing__container">
              <span>reguler price</span>
              <span>offer price</span>
            </div>
          </div>
        </div>
        <div>
          <div>Rating</div>
          <div>Title</div>
          <div>Details</div>
          <div>Teacher info</div>
          <div>Pricing</div>
        </div>
        <div>
          <div>Rating</div>
          <div>Title</div>
          <div>Details</div>
          <div>Teacher info</div>
          <div>Pricing</div>
        </div>
        <div>
          <div>Rating</div>
          <div>Title</div>
          <div>Details</div>
          <div>Teacher info</div>
          <div>Pricing</div>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
