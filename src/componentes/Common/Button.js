import React from "react";
// import "../../styles/components/_button.scss";
const Button = (props) => {
  return (
    <div>
      <button onClick={props?.action} className={`${props?.className}`}>
        {props?.children}
      </button>
    </div>
  );
};

export default Button;
