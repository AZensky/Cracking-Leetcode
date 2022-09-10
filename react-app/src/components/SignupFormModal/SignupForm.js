import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/session";
import crackingLeetcodeLogo from "../../assets/crackingLeetcodeLogo.png";
import "./SignupForm.css";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const allErrors = [];
    if (username.trim().length === 0)
      allErrors.push("Username field is required");

    if (password.length === 0) allErrors.push("Password field is required");

    // Check if password is all spaces and if so, add error
    if (password.length >= 4 && password.split("").every((el) => el === " "))
      allErrors.push("Password cannot be all spaces");

    if (confirmPassword.length === 0)
      allErrors.push("Confirm Password field is required");

    if (password.length > 0 && password.length < 4)
      allErrors.push("Password must be at least 4 characters");

    if (confirmPassword !== password)
      allErrors.push("Password does not match Confirm Password");

    setErrors(allErrors);
  }, [username, password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (errors.length > 0) return;

    const trimmedUsername = username.trim();

    const data = await dispatch(signUp(trimmedUsername, password));
    if (data) {
      setErrors(data);
    }
  };

  //form with controlled components
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="login-form__validation-errors">
        {hasSubmitted &&
          errors.length > 0 &&
          errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <img className="login-form__icon" src={crackingLeetcodeLogo} alt="logo" />
      <h1 className="login-form__title">Sign Up</h1>
      <label className="login-form__email__label">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          maxLength="40"
          // required
        />
      </label>
      <label className="login-form__password__label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          maxLength="100"
          // required
        />
      </label>
      <label className="login-form__password__label">
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          maxLength="100"
          // required
        />
      </label>
      <button type="submit" className="login-form__log-in">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
