import CodeMirror from "@uiw/react-codemirror";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createSolution, loadSolutions } from "../../store/solutions";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import "./SubmitSolution.css";

function SubmitSolution() {
  const { problemId } = useParams();

  const [solution, setSolution] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [title, setTitle] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const errors = [];
    if (solution.length === 0 || solution.trim().length === 0)
      errors.push("Solution is required");
    if (title.length === 0) errors.push("Title is required");

    setValidationErrors(errors);
  }, [solution, title]);

  async function handleSubmit(e) {
    e.preventDefault();
    setHasSubmitted(true);

    if (validationErrors.length > 0) {
      return;
    }

    const info = {
      solution,
      title,
      language,
    };

    setSolution("");
    setTitle("");
    setLanguage("javascript");
    setHasSubmitted(false);

    let createdSolution = await dispatch(createSolution(problemId, info));

    await dispatch(loadSolutions(problemId));
  }

  return (
    <div className="submit-solution-container">
      <h3 className="submit-solution-header">Submit Solution</h3>
      <form className="submit-solution-form" onSubmit={handleSubmit}>
        <div className="code-editor-container">
          <ul className="login-form__validation-errors">
            {hasSubmitted &&
              validationErrors.length > 0 &&
              validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className="solution-form-title">
            Solution Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </label>

          <label className="solution-form-language-selection">
            Language:
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value={"javascript"}>JavaScript</option>
              <option value={"python"}>Python</option>
            </select>
          </label>

          {/* if selected language is javascript, render a code editor with javascript formatting/highlighting */}
          {language === "javascript" && (
            <CodeMirror
              value={solution}
              height="250px"
              extensions={[javascript()]}
              theme={dracula}
              onChange={(value) => setSolution(value)}
              className="submit-solution-code-editor"
            />
          )}

          {/* if selected language is python, render a code editor with python formatting/highlighting */}
          {language === "python" && (
            <CodeMirror
              value={solution}
              height="250px"
              extensions={[python()]}
              theme={dracula}
              onChange={(value) => setSolution(value)}
              className="submit-solution-code-editor"
            />
          )}

          <button type="submit">Submit Solution</button>
        </div>
      </form>
    </div>
  );
}

export default SubmitSolution;
