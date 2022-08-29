import CodeMirror from "@uiw/react-codemirror";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editSolution } from "../../store/solutions";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import crackingLeetcodeLogo from "../../assets/crackingLeetcodeLogo.png";
import "./EditSolutionForm.css";

function EditSolutionForm({ solutionId, oldTitle, oldSolution, oldLanguage }) {
  const { problemId } = useParams();

  const [solution, setSolution] = useState(oldSolution);
  const [language, setLanguage] = useState(oldLanguage);
  const [title, setTitle] = useState(oldTitle);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const errors = [];
    if (solution.length === 0) errors.push("Solution is required");
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

    let editedSolution = await dispatch(
      editSolution(problemId, solutionId, info)
    );
  }

  console.log("SOLUTION", solution);

  //form with controlled components
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="login-form__validation-errors">
        {hasSubmitted &&
          validationErrors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <img className="login-form__icon" src={crackingLeetcodeLogo} alt="logo" />
      <h1 className="login-form__title">Edit Solution</h1>
      <label className="solution-edit-form-title">
        Solution Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
      </label>

      <label className="solution-edit-form-language-selection">
        Language:
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
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
          className="edit-solution-code-editor"
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
          className="edit-solution-code-editor"
        />
      )}
      <button type="submit" className="login-form__log-in">
        Submit Solution
      </button>
    </form>
  );
}

export default EditSolutionForm;
