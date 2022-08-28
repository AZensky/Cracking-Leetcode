import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Topic from "../Topics/Topic";
import Footer from "../Footer/Footer";
import "./HomePage.css";

function HomePage() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch() {}

  return (
    <div className="main-content-container">
      {/* Home page header */}
      <div className="home-page-header">
        <div>
          <h1>Grind 50</h1>
        </div>
        <div className="problems-completed-section">
          <p>Completed: 30/50</p>
          <ProgressBar
            completed={60}
            bgColor="#3CDB7C"
            baseBgColor="#282D3A"
            width="200px"
          />
        </div>
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
          <button className="display-content-btn">
            Display All Content <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>

      {/* Contains all the problems */}
      <div className="problems-container">
        {/* Loop through all the problem topics */}
        <Topic num={1} title={"Arrays"} />
        <Topic num={2} title={"Hash Maps"} />
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
