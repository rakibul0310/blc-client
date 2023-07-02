import React from "react";
import CustomLink from "./CustomLink";

const Page404 = () => {
  return (
    <div className="page404_container">
      <h1>404 Page Is Not Found</h1>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <CustomLink href="/" className="more-link">
          &nbsp; Home
        </CustomLink>
      </div>
    </div>
  );
};

export default Page404;
