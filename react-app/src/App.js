import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { useDisplayProblemsContext } from "./context/DisplayProblems";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProblemDetailsPage from "./components/ProblemDetailsPage/ProblemDetailsPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";

function App() {
  const { setDisplayProblems } = useDisplayProblemsContext();
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  useEffect(() => {
    history.listen(() => {
      setDisplayProblems(false);
    });
  }, [history]);

  if (!loaded) {
    return null;
  }

  return (
    // <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/problems/:problemId">
          <ProblemDetailsPage />
        </Route>
      </Switch>
    </>
    // </BrowserRouter>
  );
}

export default App;
