import React from "react";

const MyCourses = ({ data, limit }) => {
  return (
    <>
      <div className="my__courses__container">
        {data &&
          data.slice(0, limit).map((d) => (
            <div className="course__container">
              <div className="icon__container">Icon</div>
              <div className="course__title">
                <h4>{d.title ? d.title : "History Of Bangladesh"}</h4>
                <span>{d.author ? d.author : "Jhon D."}</span>
              </div>
              <div className="course__traking__percentence__container">
                Precentence
              </div>
              <div className="course__rating__container">Icon 4.3</div>
              <div className="course__btn__container">
                <button>View Course</button>
              </div>
            </div>
          ))}

        {/* <div className="course__container">
          <div className="icon__container">Icon</div>
          <div className="course__title">
            <h4>History Of Bangladesh</h4>
            <span>Jhon D.</span>
          </div>
          <div className="course__traking__percentence__container">
            Precentence
          </div>
          <div className="course__rating__container">Icon 4.3</div>
          <div className="course__btn__container">
            <button>View Course</button>
          </div>
        </div> */}

        {/* <div className="course__container">
          <div className="icon__container">Icon</div>
          <div className="course__title">
            <h4>History Of Bangladesh</h4>
            <span>Jhon D.</span>
          </div>
          <div className="course__traking__percentence__container">
            Precentence
          </div>
          <div className="course__rating__container">Icon 4.3</div>
          <div className="course__btn__container">
            <button>View Course</button>
          </div>
        </div> */}
        <div className="view__all__btn__container">
          <button>View all Icon</button>
        </div>
      </div>
    </>
  );
};

export default MyCourses;
