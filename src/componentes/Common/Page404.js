import React from "react";
import CustomLink from "./CustomLink";

const Page404 = () => {
  return (
    <div className="page404_container">
      <h1>404 Page Is Not Found</h1>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <CustomLink href="/" className="more-link">
          &nbsp; Home
        </CustomLink>
      </div>
    </div>
  );
};

export default Page404;
