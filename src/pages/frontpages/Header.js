import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import CustomLink from "../../componentes/Common/CustomLink";
import CustomIcon from "../../componentes/Common/CustomIcon";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../features/slices/commonSlices/userInfoSlice";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);
  let toggleRef = useRef();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("blcToken"));
    dispatch(userData(token));
  }, []);

  useEffect(() => {
    const handleMenuDropDown = (e) => {
      setToggle(false);
      // if (toggleRef.current.contains(e.target)) {
      //   console.log(toggleRef);
      // }
    };

    document.addEventListener("mousedown", handleMenuDropDown);
  });

  const addStickyNav = () => {
    if (window.pageYOffset > 100) {
      setSticky(true);
      return;
    } else {
      setSticky(false);
      return;
    }
  };

  window.addEventListener("scroll", addStickyNav);

  return (
    <>
      {/* nav bar */}
      <section className={`header ${sticky ? "sticky" : ""}`}>
        {/* logo or branding */}
        <div>
          <CustomLink className="header__logo" href="/">
            {/* <img src={logo} alt="Brand" width={150} /> */}
            <h2>Blended</h2>
            {/* <h2>BLC.</h2>
            <span>Blended Learning Center</span> */}
          </CustomLink>
        </div>
        {/* nav menus */}
        <nav className="header__nav" ref={toggleRef}>
          {/* toggle btn */}
          <div className="nav__toggle">
            <button className="btn--toggle" onClick={() => setToggle(!toggle)}>
              <CustomIcon
                className={`nav__toggle__btn__icon  ${
                  toggle ? "cross" : "menu"
                }`}
              >
                {toggle ? <RxCrossCircled /> : <AiOutlineMenu />}
              </CustomIcon>
            </button>
          </div>
          {/* nav links */}
          <div className={`nav__container  ${toggle ? "" : "toggled"}`}>
            <ul className="nav__list">
              <li className="nav__item">
                <CustomLink className="nav__link" href="/">
                  Home
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink className="nav__link" href="/about">
                  About
                </CustomLink>
              </li>
              <li className="nav__item">
                <CustomLink className="nav__link" href="/courses">
                  Courses
                </CustomLink>
              </li>
              {userInfo.data.token && (
                <li className="nav__item">
                  <CustomLink className="nav__link" href="/dashboard">
                    Dashboard
                  </CustomLink>
                </li>
              )}
              {!userInfo.data.token && (
                <li className="nav__item">
                  <CustomLink className="nav__link nav__link-btn" href="/login">
                    Login
                  </CustomLink>
                </li>
              )}
              {!userInfo.data.token && (
                <li className="nav__item">
                  <CustomLink
                    className="nav__link nav__link-btn"
                    href="/register"
                  >
                    Register
                  </CustomLink>
                </li>
              )}
              {userInfo.data.token && (
                <li className="nav__item">
                  <CustomLink className="nav__link nav__link-btn">
                    Logout
                  </CustomLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
