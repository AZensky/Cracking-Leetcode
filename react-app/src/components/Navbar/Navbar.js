import React from "react";
import LoginFormModal from "../LoginFormModal/LoginFormModal";
import SignupFormModal from "../SignupFormModal/SignupFormModal";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/session";
import crackingLeetcodeLogo from "../../assets/crackingLeetcodeLogo.png";
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
      <Link to="/" className="home-navigation">
        <div className="nav-logo-title-container">
          <div className="logo-container">
            <img src={crackingLeetcodeLogo} alt="Cracking Leetcode Logo" />
          </div>
          <h1>Cracking Leetcode</h1>
        </div>
      </Link>
      <div className="login-container">{sessionLinks}</div>
    </div>
  );
}

export default Navbar;
