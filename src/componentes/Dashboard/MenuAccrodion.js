import React, { useState } from "react";
import CustomLink from "../Common/CustomLink";
import { dashboardMenus } from "../../utils/tools/dashboardMenus";
import { FiLogOut } from "react-icons/fi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useBreakpoints } from "react-device-breakpoints";
import CustomIcon from "../Common/CustomIcon";
import { useLocation } from "react-router-dom";

const MenuAccrodion = () => {
  const [collapse, setCollapse] = useState(false);
  const activePath = useLocation();
  const toggle = (index) => {
    if (collapse === index) {
      return setCollapse(null);
    }
    setCollapse(index);
  };
  const device = useBreakpoints();

  return (
    <>
      {dashboardMenus.map((d, i) => (
        <li
          key={d.id}
          className={`sidebar__menu__list ${d.dropdown ? "submenu" : ""}`}
          id={d.id}
        >
          <CustomLink
            href={d?.route}
            onClick={() => {
              // console.log("clicked");
              toggle(d.id);
              if (!d.dropdown) {
                // sideBarShow(true);
              }
            }}
            className="sidebar__menu__link"
          >
            <div className="icon_text">
              <CustomIcon className="sidebar__menu__icon">{d.icon}</CustomIcon>
              <p>{d.menu}</p>
            </div>
            {d.dropdown && (
              <CustomIcon className="sidebar__menu__icon">
                <RiArrowDropRightLine />
              </CustomIcon>
            )}
          </CustomLink>
          {collapse === d.id ? (
            <ul>
              {d.dropdown
                // ?.filter((pt) => pt?.permission?.includes(userRole)) // here should be "userRole"
                ?.map((drop) => {
                  return (
                    <li key={drop.id}>
                      <CustomLink
                        href={drop?.route}
                        className={`nav__link dropdown ${
                          activePath.pathname === drop?.route ? "active" : ""
                        }`}
                        onClick={() => {
                          //   sideBarShow(true);
                          device.isTablet && setCollapse(false);
                          // setCollapse(false);
                        }}
                      >
                        {drop.menu}
                      </CustomLink>
                    </li>
                  );
                })}
            </ul>
          ) : (
            console.log("null")
          )}
        </li>
      ))}
      <li className="sidebar__menu__list">
        <CustomLink href="/" className="sidebar__menu__link">
          <div className="icon__text">
            <CustomIcon className="sidebar__menu__icon logout">
              <FiLogOut />
            </CustomIcon>
          </div>
          <span className="sidebar__logout">Logout</span>
        </CustomLink>
      </li>
    </>
  );
};

export default MenuAccrodion;
