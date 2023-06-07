import React, { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import CustomIcon from "../Common/CustomIcon";
import CustomLink from "../Common/CustomLink";
import { FiSun } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import avatar from "../../assets/avater/avater1.jpg";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [changeTheme, setChangeTheme] = useState("light");
  return (
    <section className="navbar__section__container">
      <div className="navbar__branding__container">
        <CustomIcon className="hamburger_icon">
          <RiBarChartHorizontalLine
          //   onClick={() => setShow(!show)}
          />
        </CustomIcon>
        {/* logo or branding */}
        <div className="navbar__logo">
          <CustomLink className="header__logo" href="/">
            {/* <img src={logo} alt="Brand" width={150} /> */}
            <h2>BLC.</h2>
            <span>Blended Learning Center</span>
          </CustomLink>
        </div>
      </div>
      <div>
        <ul className="navbar__menu__lists">
          <li className="navbar__menu__list">
            <div className="theme_icon" id="theme_icon">
              <button
                onClick={() =>
                  setChangeTheme(changeTheme === "light" ? "dark" : "light")
                }
                id="theme_icon"
              >
                {changeTheme === "dark" ? <FiSun /> : <MdOutlineDarkMode />}
              </button>
            </div>
          </li>
          <li className="rf_header_menu_list">
            <img
              src={avatar}
              alt="user_pic"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <div className={`${openMenu ? "open" : "close"}`}>
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
