import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import crackingLeetcodeLogo from "../../assets/crackingLeetcodeLogo.png";
import "./LoginForm.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const allErrors = [];
    if (username.length === 0) allErrors.push("Username field is required");

    if (password.length === 0) allErrors.push("Password field is required");

    setErrors(allErrors);
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);
    if (errors.length > 0) return;

    //if there are errors when trying to log in, set the errors, so we can display them
    const data = await dispatch(login(username, password));
    if (data) {
      setErrors(data);
    }
  };

  //form with controlled components
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="login-form__validation-errors">
        {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <img className="login-form__icon" src={crackingLeetcodeLogo} alt="logo" />
      <h1 className="login-form__title">Log in</h1>
      <label className="login-form__email__label">
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // required
        />
      </label>
      <label className="login-form__password__label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // required
        />
      </label>
      <button type="submit" className="login-form__log-in">
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
