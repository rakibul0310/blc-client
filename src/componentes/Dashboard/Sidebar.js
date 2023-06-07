import React from "react";
import CustomLink from "../Common/CustomLink";
import MenuAccrodion from "./MenuAccrodion";

const Sidebar = () => {
  return (
    <section className="sidebar__section__container">
      <div className="logo__container">
        <CustomLink className="header__logo" href="/">
          <h2>BLC.</h2>
          <span>Blended Learning Center</span>
        </CustomLink>
      </div>
      <div className="user__info__container">
        <h2>Jhon Murari</h2>
        <span>Email: jhon@murari.com</span>
      </div>
      <div className="sidebar__menu__container">
        <ul className="sidebar__menu__lists">
          <MenuAccrodion />
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
