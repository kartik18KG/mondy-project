import React, { useState, useContext } from "react";
import "./css/loginForm.css";
import { NavLink, Redirect } from "react-router-dom";
import { signIn, LoginWithGoogle } from "../crudFunctions/authFunctions";
import firebase, { fbConfig } from "../../config/fbConfig";
import { AuthContext } from "../../contexts/authContext";
const LoginForm = () => {
  const { authData, dispatch } = useContext(AuthContext);
  console.log(authData);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    await signIn(email, password, dispatch);
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    LoginWithGoogle();
  };

  const loginCode = useContext(AuthContext).authData.loginCode;
  const status = useContext(AuthContext).authData.errorMessage;
  console.log(status);
  if (authData.loginCode === 200) return <Redirect to="/" />;

  return (
    <div className="login-form-container">
      <div className="login-div">
        <div className="logo">
          <img src="https://www.svgrepo.com/show/154629/big-owl.svg" alt="" />
        </div>
        <div className="title">Hey !!! , Welcome Back...</div>

        <form onSubmit={handleSubmit}>
          <div className="fields">
            <div className="username">
              <svg fill="#999" viewBox="0 0 1024 1024">
                <path
                  className="path1"
                  d="M896 307.2h-819.2c-42.347 0-76.8 34.453-76.8 76.8v460.8c0 42.349 34.453 76.8 76.8 76.8h819.2c42.349 0 76.8-34.451 76.8-76.8v-460.8c0-42.347-34.451-76.8-76.8-76.8zM896 358.4c1.514 0 2.99 0.158 4.434 0.411l-385.632 257.090c-14.862 9.907-41.938 9.907-56.802 0l-385.634-257.090c1.443-0.253 2.92-0.411 4.434-0.411h819.2zM896 870.4h-819.2c-14.115 0-25.6-11.485-25.6-25.6v-438.566l378.4 252.267c15.925 10.618 36.363 15.925 56.8 15.925s40.877-5.307 56.802-15.925l378.398-252.267v438.566c0 14.115-11.485 25.6-25.6 25.6z"
                ></path>
              </svg>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="user-input"
                required
                placeholder="email"
              />
            </div>
            <div className="password">
              <svg fill="#999" viewBox="0 0 1024 1024">
                <path
                  className="path1"
                  d="M742.4 409.6h-25.6v-76.8c0-127.043-103.357-230.4-230.4-230.4s-230.4 103.357-230.4 230.4v76.8h-25.6c-42.347 0-76.8 34.453-76.8 76.8v409.6c0 42.347 34.453 76.8 76.8 76.8h512c42.347 0 76.8-34.453 76.8-76.8v-409.6c0-42.347-34.453-76.8-76.8-76.8zM307.2 332.8c0-98.811 80.389-179.2 179.2-179.2s179.2 80.389 179.2 179.2v76.8h-358.4v-76.8zM768 896c0 14.115-11.485 25.6-25.6 25.6h-512c-14.115 0-25.6-11.485-25.6-25.6v-409.6c0-14.115 11.485-25.6 25.6-25.6h512c14.115 0 25.6 11.485 25.6 25.6v409.6z"
                ></path>
              </svg>
              <input
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="pass-input"
                placeholder="password"
              />
            </div>
          </div>
          <button type="submit" className="signin-button">
            <div className="center">LOGIN</div>
          </button>

          <div className="text-danger">{status}</div>
          <div className="link">
            <NavLink to="/login/forget">Forgot password?</NavLink> or{" "}
            <NavLink className="text-primary" to="/signup">
              Sign up
            </NavLink>{" "}
            or
          </div>
        </form>
        <button
          onClick={handleLoginWithGoogle}
          className="signin-button signin-with-google"
        >
          <div className="center">
            Continue With{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
              className="google-logo"
              alt="Google Logo"
            />
          </div>
        </button>
        <br />
      </div>
    </div>
  );
};

export default LoginForm;
