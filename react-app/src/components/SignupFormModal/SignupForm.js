import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(username, password));
  };

  //form with controlled components
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="login-form__validation-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <img
        className="login-form__icon"
        src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg"
        alt="logo"
      />
      <h1 className="login-form__title">Sign Up</h1>
      <label className="login-form__email__label">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className="login-form__password__label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="login-form__log-in">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
