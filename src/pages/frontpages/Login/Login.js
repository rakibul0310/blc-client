import React from "react";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import CustomLink from "../../../componentes/Common/CustomLink";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login__main__container">
        <div className="login__form__container">
          <div className="page__title">
            <h2>Hi, Welcome back!</h2>
          </div>

          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div className="form__additional__info__container">
              <div className="keep__me__login__container">
                <input type="checkbox" name="" id="" />
                <span>Keep me loged in</span>
              </div>

              <CustomLink href="#">Forgot?</CustomLink>
            </div>

            <input className="btn__login" type="button" value="Login" />

            <span className="register__now__text">
              Don't have an account?
              <CustomLink className="register__link" href="/register">
                Register Now
              </CustomLink>
            </span>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
