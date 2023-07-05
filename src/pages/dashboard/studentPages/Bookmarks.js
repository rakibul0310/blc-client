import React from "react";
import { coursesData } from "../../../fakeData/coursesData";
import BookmarkCard from "../../../componentes/Dashboard/User/BookmarkCard";

const Bookmarks = () => {
  return (
    <div className="payment__history__container courses__section dashboard__courses">
      <div className="heading" style={{ margin: "2rem 0" }}>
        <h3>Your Bookmarks</h3>
      </div>
      <div className="courses__container">
        {coursesData.map((d, i) => (
          <BookmarkCard key={i} coverImg={d.coverImg} title={d.title} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
