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
  const [twoPointerProblems, setTwoPointerProblems] = useState({});
  const [slidingWindowProblems, setSlidingWindowProblems] = useState({});
  const [binarySearchProblems, setBinarySearchProblems] = useState({});
  const [stackProblems, setStackProblems] = useState({});
  const [linkedListProblems, setLinkedListProblems] = useState({});
  const [recursionProblems, setRecursionProblems] = useState({});
  const [treeProblems, setTreeProblems] = useState({});
  const [graphProblems, setGraphProblems] = useState({});
  const [dynamicProgrammingProblems, setDynamicProgrammingProblems] = useState(
    {}
  );
  const [showMenu, setShowMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  const allProblems = useSelector((state) => state.problems.Problems);
  const user = useSelector((state) => state.session.user);

  // Get problems from backend
  useEffect(() => {
    const initializePage = async () => {
      await dispatch(loadProblems());
    };

    initializePage();
  }, [dispatch]);

  // Loop through all problems, and sort them according to their category
  useEffect(() => {
    if (!allProblems) return;

    let arrayProblems = [];
    let hashMapProblems = [];
    let twoPointerProblems = [];
    let slidingWindowProblems = [];
    let binarySearchProblems = [];
    let stackProblems = [];
    let linkedListProblems = [];
    let recursionProblems = [];
    let treeProblems = [];
    let graphProblems = [];
    let dpProblems = [];

    for (let i = 0; i < allProblems.length; i++) {
      let problem = allProblems[i];
      switch (problem.category) {
        case "Array":
          arrayProblems.push(problem);
          break;
        case "Hash Maps":
          hashMapProblems.push(problem);
          break;
        case "Two Pointers":
          twoPointerProblems.push(problem);
          break;
        case "Sliding Window":
          slidingWindowProblems.push(problem);
          break;
        case "Binary Search":
          binarySearchProblems.push(problem);
          break;
        case "Stack":
          stackProblems.push(problem);
          break;
        case "Linked List":
          linkedListProblems.push(problem);
          break;
        case "Recursion":
          recursionProblems.push(problem);
          break;
        case "Trees":
          treeProblems.push(problem);
          break;
        case "Graphs":
          graphProblems.push(problem);
          break;
        case "Dynamic Programming":
          dpProblems.push(problem);
          break;
      }
    }

    setArrayProblems(arrayProblems);
    setHashMapProblems(hashMapProblems);
    setTwoPointerProblems(twoPointerProblems);
    setSlidingWindowProblems(slidingWindowProblems);
    setBinarySearchProblems(binarySearchProblems);
    setStackProblems(stackProblems);
    setLinkedListProblems(linkedListProblems);
    setRecursionProblems(recursionProblems);
    setTreeProblems(treeProblems);
    setGraphProblems(graphProblems);
    setDynamicProgrammingProblems(dpProblems);
  }, [allProblems]);

  // Search dropdown
  useEffect(() => {
    if (searchInput.length > 0) {
      setShowMenu(true);
      setSearchResults(handleSearch(searchInput));
    } else {
      setShowMenu(false);
      setSearchResults([]);
    }
  }, [searchInput]);

  // Reset scroll height to top of page when navigated here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle input into search bar
  function handleSearch(searchInput) {
    const problems = [];

    for (let i = 0; i < problemList.length; i++) {
      let problem = problemList[i];
      let name = problem.name;

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
          <h1>Curated 50</h1>
        </div>
        {user && (
          <div className="problems-completed-section">
            <p>
              Completed: {user.problemsSolved.length}/
              {allProblems ? allProblems.length : 50}
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
        <Topic num={3} title={"Two Pointers"} problems={twoPointerProblems} />
        {/* prettier-ignore */}
        <Topic num={4} title={"Sliding Window"} problems={slidingWindowProblems} />
        {/* prettier-ignore */}
        <Topic num={5} title={"Binary Search"} problems={binarySearchProblems} />
        <Topic num={6} title={"Stack"} problems={stackProblems} />
        <Topic num={7} title={"Linked List"} problems={linkedListProblems} />
        <Topic num={8} title={"Recursion"} problems={recursionProblems} />
        <Topic num={9} title={"Trees"} problems={treeProblems} />
        <Topic num={10} title={"Graphs"} problems={graphProblems} />
        {/* prettier-ignore */}
        <Topic num={11} title={"Dynamic Programming"} problems={dynamicProgrammingProblems} />
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
