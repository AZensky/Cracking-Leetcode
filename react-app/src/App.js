import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDisplayProblemsContext } from "./context/DisplayProblems";
import { useDispatch } from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProblemDetailsPage from "./components/ProblemDetailsPage/ProblemDetailsPage";
import NotFound from "./components/NotFound/NotFound";
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
    <>
      <Switch>
        <Route path="/" exact={true}>
          <Navbar />
          <HomePage />
        </Route>
        <Route path="/problems/:problemId">
          <Navbar />
          <ProblemDetailsPage />
        </Route>
        <Route>
          <Navbar notFound={true} />
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
