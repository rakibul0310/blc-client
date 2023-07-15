import React, { useState } from "react";
import CustomLink from "../Common/CustomLink";
import { dashboardMenus } from "../../utils/tools/dashboardMenus";
import { FiLogOut } from "react-icons/fi";
import { RiArrowDropRightLine } from "react-icons/ri";
import CustomIcon from "../Common/CustomIcon";
import { useLocation } from "react-router-dom";
import { useBreakpoints } from "react-device-breakpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../features/slices/commonSlices/userInfoSlice";

const MenuAccrodion = ({ setSidebarToggle }) => {
  const [collapse, setCollapse] = useState(false);
  const activePath = useLocation();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(userData());
  }, []);

  const toggle = (index) => {
    if (collapse === index) {
      return setCollapse(null);
    }
    setCollapse(index);
  };

  const device = useBreakpoints();
  const protectedMenus = dashboardMenus.filter((m) =>
    m.permission.includes(userInfo.data.role)
  );

  const handleLogOut = () => {
    localStorage.removeItem("blcToken");
  };

  return (
    <>
      {protectedMenus.map((d, i) => (
        <li
          key={d.id}
          className={`sidebar__menu__list ${d.dropdown ? "submenu" : ""}`}
          id={d.id}
        >
          <CustomLink
            href={d?.route}
            onClick={() => {
              toggle(d.id);
              if (!d.dropdown) {
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
                          // console.log("clicked");
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
        <a
          href="/"
          onClick={() => handleLogOut()}
          className="sidebar__menu__link logout-link"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div className="icon__text">
            <CustomIcon className="sidebar__menu__icon logout">
              <FiLogOut />
            </CustomIcon>
          </div>
          <span className="sidebar__logout">Logout</span>
        </a>
      </li>
    </>
  );
};

export default MenuAccrodion;
