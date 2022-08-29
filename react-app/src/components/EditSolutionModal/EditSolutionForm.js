import CodeMirror from "@uiw/react-codemirror";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createSolution } from "../../store/solutions";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";
import crackingLeetcodeLogo from "../../assets/crackingLeetcodeLogo.png";
import "./EditSolutionForm.css";

function EditSolutionForm() {
  const { problemId } = useParams();

  const [solution, setSolution] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [title, setTitle] = useState("");
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

    let createdSolution = await dispatch(createSolution(problemId, info));
  }

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
      <button type="submit" className="login-form__log-in">
        Log In
      </button>
    </form>
  );
}

export default EditSolutionForm;
