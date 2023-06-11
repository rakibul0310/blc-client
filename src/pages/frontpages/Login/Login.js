import React from "react";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import CustomLink from "../../../componentes/Common/CustomLink";

const Login = () => {
  return (
    <>
      <Header />
      <div>
        <div>
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
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <span>Keep me loged in</span>
            </div>

            <CustomLink>Forgot?</CustomLink>
          </div>

          <input type="button" value="Login" />

          <span>
            Don't have an account? <CustomLink>Register Now</CustomLink>
          </span>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
