import React from "react";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import "./Navbar.css";

function Navbar() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="session-links-logged-in">
        <button onClick={onLogout} className="logout-btn">
          Logout
        </button>
      </div>
    );
  } else {
    sessionLinks = (
      <>
        {/* <DemoLoginButton /> */}
        <LoginFormModal styleClass="nav-login-btn" />
        <SignupFormModal styleClass="nav-sign-up" />
      </>
    );
  }

  return (
    <div className="navbar-container">
      <div className="nav-logo-title-container">
        <div className="logo-container">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navbar-logo"
          >
            <path
              d="M2 23L7.5 12.5M23 23L18 12.5M18 12.5L13 2L7.5 12.5M18 12.5H7.5M18 12.5L2.5 23H22.5"
              stroke="white"
            />
          </svg>
        </div>
        <h1>Cracking Leetcode</h1>
      </div>
      <div className="login-container">{sessionLinks}</div>
    </div>
  );
}

export default Navbar;
