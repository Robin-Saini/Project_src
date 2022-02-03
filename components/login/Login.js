import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css';
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
import Facebook from "../GoogleLogin/FacebookLogin";
import { Link } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handlePassword = (e) =>{
    const { password, value } = e.target;
    setUser({
      ...user,
      [password]: value,
    });
  };

  const login = () => {
    axios.post(process.evn.REACT_APP_LOGIN_API_URL, user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
  };
  return (
    <>
      <div class="login_Sec">
        <div class="text-teal-600 ">
            <h3>Sign in to your account</h3>
        </div>
        <div class="mt-8">
        <div className="fb_login">
          <div className="fb">
            <Facebook />
          </div>
          <div className="ggl">
            <MyGoolgeLogin />
          </div>
        </div>
          <form action="#" autoComplete="off">
            <div class="login_form">
              <div class="flex relative ">
                <input
                  type="text"
                  id="sign-in-email"
                  class="inp_0"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter Email/Username"
                />
              </div>
            </div>
            <div class="">
              <div class=" ">
                <input
                  type="password"
                  id="sign-in-password"
                  class="inp_0"
                  name="Enter Password"
                //   value={user.password}
                  onChange={handlePassword}
                  placeholder="Your password"
                />
              </div>
            </div>
            <div class="">
              <div class="">
                <a href="#" class="">
                  Forgot Your Password?
                </a>
              </div>
            </div>
            <div class="flex w-full">
              <button
                type="submit"
                class="btn"
                onClick={login}
              >
              NEXT
              </button>
            </div>
          </form>
        </div>
    <div className="not_a">
        <p>Not a member</p>
    </div>
    <div>
        <Link to="/Register">
        <p>
            Create you account
        </p>
        </Link>
        <div>
            Forgot Password
        </div>
    </div>
      </div>
    </>
  );
};
export default Login;
