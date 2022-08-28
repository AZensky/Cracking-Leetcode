import React from "react";
import ProblemHeader from "./ProblemHeader";
import ProblemDescription from "./ProblemDescription";
import ProblemSolutions from "./ProblemSolutions";
import SubmitSolution from "./SubmitSolution";
import Footer from "../Footer/Footer";

import "./ProblemDetailsPage.css";

function ProblemDetailsPage() {
  return (
    <div className="problem-details-page-container">
      <ProblemHeader />
      <div className="problem-details-content-container">
        <ProblemDescription />
        <ProblemSolutions />
        <SubmitSolution />
      </div>

      <Footer />
    </div>
  );
}

export default ProblemDetailsPage;
