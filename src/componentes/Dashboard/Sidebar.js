import React, { useRef } from "react";
import CustomLink from "../Common/CustomLink";
import MenuAccrodion from "./MenuAccrodion";
import { useEffect } from "react";
import { useBreakpoints } from "react-device-breakpoints";

const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
  let toggleRef = useRef();

  const device = useBreakpoints();

  useEffect(() => {
    const handleMenuDropDown = (e) => {
      if (device.isTablet && !toggleRef?.current?.contains(e?.target)) {
        // setSidebarToggle(true);
        console.log(sidebarToggle);
      }
      // console.log(openMenu);
    };

    document.addEventListener("mousedown", handleMenuDropDown);
  });

  return (
    <section className="sidebar__section__container" ref={toggleRef}>
      <div className="logo__container">
        <CustomLink className="header__logo" href="/">
          {/* <h2>BLC.</h2>
          <span>Blended Learning Center</span> */}
          <h2>Blended</h2>
        </CustomLink>
      </div>
      <div className="user__info__container">
        <h2>Jhon Murari</h2>
        <span>Email: jhon@murari.com</span>
      </div>
      <div className="sidebar__menu__container">
        <ul className="sidebar__menu__lists">
          <MenuAccrodion setSidebarToggle={setSidebarToggle} />
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
