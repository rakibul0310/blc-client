import React from "react";
import CustomLink from "../Common/CustomLink";

const Footer = () => {
  return (
    <footer>
      <div className="footer__menus">
        <div className="footer__menu">
          <ul>
            <li>
              <CustomLink>BLC Business</CustomLink>
            </li>
            <li>
              <CustomLink>Teach in BLC</CustomLink>
            </li>
            <li>
              <CustomLink>About us</CustomLink>
            </li>
            <li>
              <CustomLink>Contact us</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <CustomLink>Courses</CustomLink>
            </li>
            <li>
              <CustomLink>Blogs</CustomLink>
            </li>
            <li>
              <CustomLink>Help and Support</CustomLink>
            </li>
            <li>
              <CustomLink>Affiliate</CustomLink>
            </li>
            <li>
              <CustomLink>Investors</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <ul>
            <li>
              <CustomLink>Terms</CustomLink>
            </li>
            <li>
              <CustomLink>Privacy policy</CustomLink>
            </li>
            <li>
              <CustomLink>Sitemap</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer__menu">
          <button>
            {/* world icon */}
            English
          </button>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__branding">
          <CustomLink className="header__logo" href="/">
            {/* <img src={logo} alt="Brand" width={150} /> */}
            <h2>Blended</h2>
            {/* <h2>BLC.</h2>
            <span>Blended Learning Center</span> */}
          </CustomLink>
        </div>
        <div className="footer__copyright">
          <span>&copy; 2023 BLC.Lms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
