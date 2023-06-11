import React from "react";
import CustomLink from "../../../componentes/Common/CustomLink";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import CustomIcon from "../../../componentes/Common/CustomIcon";
import { AiOutlineMail, AiOutlineUser, AiOutlineGoogle } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
// import { GiSunkenEye } from "react-icons/gi";
import { BiLogoGoogle } from "react-icons/bi";

const Register = () => {
  return (
    <section className="regiser__section__container">
      <Header />
      <div className="main__container">
        <div className="register__container">
          <div className="page__title">
            <h2>Register</h2>
            <span>Create a New Account</span>
          </div>

          <div className="horizontal__devider"></div>

          <div className="glg__btn__container">
            <CustomIcon className="google__icon">
              <AiOutlineGoogle />
            </CustomIcon>
            <button>Continue with Google</button>
          </div>

          <div className="devider__container">
            <div className="horizontal__devider"></div>
            <span>OR</span>
            <div className="horizontal__devider"></div>
          </div>

          <form className="regiser__form" action="">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <div htmlFor="name" className="input__container">
              <CustomIcon classname="input__box__icons">
                <AiOutlineUser />
              </CustomIcon>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your first and last name"
              />
            </div>
            <label className="label" htmlFor="email">
              Email Address:
            </label>
            <div className="input__container">
              <CustomIcon classname="input__box__icons">
                <AiOutlineMail />
              </CustomIcon>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
              />
            </div>
            <label className="label" htmlFor="password">
              Password:
            </label>
            <div className="input__container">
              <CustomIcon classname="input__box__icons">
                <RiEyeCloseLine />
                {/* <GiSunkenEye /> */}
              </CustomIcon>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Choose a password"
              />
            </div>
            <label className="label" htmlFor="confrim__password">
              Confrim Password:
            </label>
            <div className="input__container">
              <CustomIcon classname="input__box__icons">
                <RiEyeCloseLine />
                {/* <GiSunkenEye /> */}
              </CustomIcon>
              <input
                type="password"
                id="confrim__password"
                name="confrimPassword"
                placeholder="Confrim password"
              />
            </div>
            <input className="btn__register" type="button" value="Register" />
            <div className="trems__container">
              <input type="checkbox" name="terms" id="" />
              <span>I agree to the Terms of Use</span>
            </div>
          </form>

          <div className="allready__registered__container">
            <span>
              Already registered? <CustomLink href="/login">Login</CustomLink>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Register;
