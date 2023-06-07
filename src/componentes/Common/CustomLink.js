import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "../../styles/components/_link.scss";

const CustomLink = (props) => {
  let match = useLocation();
  return (
    <div>
      <Link
        to={props?.href}
        className={`${props?.className} link ${
          props.href && match.pathname === props.href ? "active" : ""
        }`}
        onClick={props?.onClick}
      >
        {props?.children}
      </Link>
    </div>
  );
};

export default CustomLink;
