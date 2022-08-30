import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProblemHeader from "./ProblemHeader";
import ProblemDescription from "./ProblemDescription";
import ProblemSolutions from "./ProblemSolutions";
import SubmitSolution from "./SubmitSolution";
import Footer from "../Footer/Footer";
import "./ProblemDetailsPage.css";

function ProblemDetailsPage() {
  const { problemId } = useParams();

  const [problemDetails, setProblemDetails] = useState();

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    const getProblemDetails = async () => {
      let res = await fetch(`/api/problems/${problemId}`);
      let data = await res.json();

      setProblemDetails(data);
    };

    getProblemDetails().catch(console.error);
  }, []);

  return (
    <div className="problem-details-page-container">
      <ProblemHeader
        name={problemDetails?.name}
        difficulty={problemDetails?.difficulty}
      />
      <div className="problem-details-content-container">
        <ProblemDescription
          description={problemDetails?.description}
          example={problemDetails?.example}
        />
        <ProblemSolutions />
        {user && <SubmitSolution />}
      </div>

      <Footer />
    </div>
  );
}

export default ProblemDetailsPage;
