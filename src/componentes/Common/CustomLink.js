import React from "react";
import { Link } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <div>
      <Link to={props?.href} className={`${props?.className} link`}>
        {props?.children}
      </Link>
    </div>
  );
};

export default CustomLink;
