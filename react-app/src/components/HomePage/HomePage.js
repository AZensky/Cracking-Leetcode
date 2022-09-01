import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProblems } from "../../store/problems";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDisplayProblemsContext } from "../../context/DisplayProblems";
import ProgressBar from "../ProgressBar/ProgressBar";
import Topic from "../Topics/Topic";
import Footer from "../Footer/Footer";
import problemList from "../../util/problem_list.json";
import "./HomePage.css";

function HomePage() {
  const { displayProblems, setDisplayProblems } = useDisplayProblemsContext();

  const [searchInput, setSearchInput] = useState("");
  const [arrayProblems, setArrayProblems] = useState({});
  const [hashMapProblems, setHashMapProblems] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const allProblems = useSelector((state) => state.problems.Problems);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    const initializePage = async () => {
      await dispatch(loadProblems());
    };

    initializePage();
  }, [dispatch]);

  useEffect(() => {
    if (!allProblems) return;

    let arrayProblems = allProblems.filter(
      (problem) => problem.category === "Array"
    );

    let hashMapProblems = allProblems.filter(
      (problem) => problem.category === "Hash Maps"
    );

    setArrayProblems(arrayProblems);
    setHashMapProblems(hashMapProblems);
  }, [allProblems]);

  useEffect(() => {
    if (searchInput.length > 0) {
      setShowMenu(true);
      setSearchResults(handleSearch(searchInput));
    } else {
      setShowMenu(false);
      setSearchResults([]);
    }
  }, [searchInput]);

  function handleSearch(searchInput) {
    const problems = [];

    for (let i = 0; i < problemList.length; i++) {
      let problem = problemList[i];
      let name = problem.name;
      console.log(
        "INPUT",
        searchInput,
        "NAME",
        name,
        name.toLowerCase().startsWith(searchInput.toLowerCase())
      );

      if (name.toLowerCase().startsWith(searchInput.toLowerCase())) {
        problems.push(problem);

        if (problems.length > 5) return problems;
      }
    }

    return problems;
  }

  return (
    <div className="main-content-container">
      {/* Home page header */}
      <div className="home-page-header">
        <div>
          <h1>CL 50</h1>
        </div>
        {user && (
          <div className="problems-completed-section">
            <p>
              Completed: {user.problemsSolved.length}/{allProblems?.length}
            </p>
            <ProgressBar
              completed={Math.trunc(
                (user.problemsSolved.length / allProblems?.length) * 100
              )}
            />
          </div>
        )}
      </div>

      {/* Search and Display All Section */}

      <div className="home-page-search-section">
        {/* Problem search form */}
        <form onSubmit={handleSearch}>
          <label>
            <button className="home-page-search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              className="home-page-search"
            />
          </label>
        </form>

        {/* Display All Content Dropdown */}
        <div className="display-content-container">
          {!displayProblems ? (
            <button
              className="display-content-btn"
              onClick={() => setDisplayProblems(true)}
            >
              Display All Content <i className="fa-solid fa-arrow-down"></i>
            </button>
          ) : (
            <button
              className="display-content-btn"
              onClick={() => setDisplayProblems(false)}
            >
              Hide All Content <i className="fa-solid fa-arrow-up"></i>
            </button>
          )}
        </div>
      </div>

      {/* Search dropdown */}
      {showMenu && searchResults.length > 0 && (
        <div className="search-dropdown-container">
          <div className="search-dropdown-menu">
            <div className="search-dropdown-items-container">
              {searchResults.map((problem) => (
                <Link
                  key={problem.id}
                  onClick={() => setSearchInput("")}
                  to={`/problems/${problem.id}`}
                  className="search-dropdown-item"
                >
                  <span className="dropdown-problem-name">{problem.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contains all the problems */}
      <div className="problems-container">
        {/* Loop through all the problem topics */}
        <Topic num={1} title={"Arrays"} problems={arrayProblems} />
        <Topic num={2} title={"Hash Maps"} problems={hashMapProblems} />
        <Topic num={3} title={"Two Pointers"} />
        <Topic num={4} title={"Sliding Window"} />
        <Topic num={5} title={"Binary Search"} />
        <Topic num={6} title={"Stack"} />
        <Topic num={7} title={"Linked List"} />
        <Topic num={8} title={"Recursion"} />
        <Topic num={9} title={"Trees"} />
        <Topic num={10} title={"Graphs"} />
        <Topic num={11} title={"Dynamic Programming"} />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
