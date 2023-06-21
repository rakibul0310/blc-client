import React, { useState } from "react";
import CustomLink from "../../../componentes/Common/CustomLink";
import Header from "../Header";
import Footer from "../../../componentes/Footer/Footer";
import CustomIcon from "../../../componentes/Common/CustomIcon";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../../features/slices/authSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Register = () => {
  const registerInfo = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [role, setRole] = useState("student");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (registerInfo.error) {
      setError(registerInfo.error);
    } else {
      setError("");
    }
  }, [registerInfo.error, error]);

  const handelRegister = (e) => {
    e.preventDefault();
    if (!checked) {
      toast.error("Must have to agree with BLC's term and conditions!");
    } else if (password !== confrimPassword) {
      toast.error("Confrim password doesn't match!");
    } else {
      const data = {
        name,
        email,
        password,
        confrimPassword,
        role,
      };
      dispatch(userRegister(data));
      if (registerInfo.data) {
        toast.success("Account created successfully");
        navigate("/login");
      }
    }
  };

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

          {/* <div className="glg__btn__container">
            <CustomIcon className="google__icon">
              <AiOutlineGoogle />
            </CustomIcon>
            <button>Continue with Google</button>
          </div> */}

          {/* <div className="devider__container">
            <div className="horizontal__devider"></div>
            <span>OR</span>
            <div className="horizontal__devider"></div>
          </div> */}

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
                required={true}
                onChange={(e) => setName(e.target.value)}
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
                required={true}
                onChange={(e) => setEmail(e.target.value)}
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
                required={true}
                onChange={(e) => setPassword(e.target.value)}
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
                required={true}
                onChange={(e) => setConfrimPassword(e.target.value)}
              />
            </div>
            <label className="label" htmlFor="register_as">
              Register As:
            </label>
            <div className="input__container">
              <select
                name="registerAs"
                id="register_as"
                defaultValue="student"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <div>{error && <span style={{ color: "red" }}>{error}</span>}</div>
            <input
              className="btn__register"
              type="button"
              value="Register"
              onClick={(e) => handelRegister(e)}
            />
            <div className="trems__container">
              <input
                type="checkbox"
                name="terms"
                id=""
                required={true}
                onChange={() => setChecked(!checked)}
              />
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
