import React, { useEffect, useRef, useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import CustomIcon from "../Common/CustomIcon";
import CustomLink from "../Common/CustomLink";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import avatar from "../../assets/avater/avater1.jpg";

const NavBar = ({ sidebarToggle, setSidebarToggle, setTriggred }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [changeTheme, setChangeTheme] = useState("light");
  let toggleRef = useRef();

  useEffect(() => {
    const handleMenuDropDown = (e) => {
      if (!toggleRef?.current?.contains(e?.target)) {
        setOpenMenu(false);
        // console.log(toggleRef);
      }
      // console.log(openMenu);
    };

    document.addEventListener("mousedown", handleMenuDropDown);
  });
  return (
    <section className="navbar__section__container">
      <div className="navbar__branding__container">
        <CustomIcon className="hamburger_icon">
          <RiBarChartHorizontalLine
            onClick={() => {
              setSidebarToggle(!sidebarToggle);
              setTriggred(true);
            }}
          />
        </CustomIcon>
        {/* {sidebarToggle && (
          <div className="logo__container">
            <CustomLink className="header__logo" href="/">
              <h2>BLC.</h2>
              <span>Blended Learning Center</span>
            </CustomLink>
          </div>
        )} */}
      </div>
      <div>
        <ul className="navbar__menu__lists">
          <li className="navbar__menu__list">
            <div className="theme_icon">
              <button
                onClick={() =>
                  setChangeTheme(changeTheme === "light" ? "dark" : "light")
                }
                id="theme_icon"
              >
                {changeTheme === "dark" ? (
                  <CustomIcon className="theme__change__icon">
                    <FiSun />
                  </CustomIcon>
                ) : (
                  <CustomIcon className="theme__change__icon">
                    <MdOutlineDarkMode />
                  </CustomIcon>
                )}
              </button>
            </div>
          </li>
          <li className="navbar__menu__list" ref={toggleRef}>
            <img
              src={avatar}
              alt="user_pic"
              onClick={() => {
                setOpenMenu(!openMenu);
                // setShowPopupMenu(!showPopupMenu);
              }}
            />
            <div className={`popup__menu ${openMenu ? "open" : "close"}`}>
              <ul>
                <li>
                  <CustomLink href="#">Profile</CustomLink>
                </li>
                <li>
                  <CustomLink href="#">Logout</CustomLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
