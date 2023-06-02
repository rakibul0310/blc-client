import React from "react";
import { IconContext } from "react-icons";

const CustomIcon = (props) => {
  return (
    <IconContext.Provider value={{ className: `${props.className} ci` }}>
      {props?.children}
    </IconContext.Provider>
  );
};

export default CustomIcon;
