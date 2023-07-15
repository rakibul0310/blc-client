import React, { useState } from "react";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import CustomLink from "../../../componentes/Common/CustomLink";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../features/slices/authSlice";
import { useEffect } from "react";
import { userData } from "../../../features/slices/commonSlices/userInfoSlice";

const Login = () => {
  const loginInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (loginInfo?.data && loginInfo?.data?.user?.token) {
      localStorage.setItem(
        "blcToken",
        JSON.stringify(loginInfo?.data?.user?.token)
      );
      navigate("/dashboard");
    }
    if (loginInfo.error) {
      setError(loginInfo.error);
    }
  }, [
    loginInfo?.data,
    loginInfo?.data?.user?.token,
    navigate,
    loginInfo.error,
  ]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        email,
        password,
      })
    );
  };
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
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form__additional__info__container">
              <div className="keep__me__login__container">
                <input type="checkbox" name="" id="" />
                <span>Keep me loged in</span>
              </div>

              <CustomLink href="#">Forgot?</CustomLink>
            </div>

            <div>{error && <span style={{ color: "red" }}>{error}</span>}</div>
            <input
              onClick={(e) => handleLogin(e)}
              className="btn__login"
              type="button"
              value="Login"
            />
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
