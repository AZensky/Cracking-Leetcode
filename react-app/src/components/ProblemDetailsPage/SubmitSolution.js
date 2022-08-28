import React, { useState, useEffect } from "react";
import "./SubmitSolution.css";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { dracula } from "@uiw/codemirror-theme-dracula";

function SubmitSolution() {
  const [solution, setSolution] = useState("");

  useEffect(() => {
    console.log(typeof solution);
  }, [solution]);

  return (
    <div className="submit-solution-container">
      <h3 className="submit-solution-header">Submit Solution</h3>
      <div className="code-editor-container">
        <CodeMirror
          value={solution}
          height="250px"
          extensions={[javascript()]}
          theme={dracula}
          onChange={(value) => setSolution(value)}
          className="submit-solution-form"
        />
      </div>
    </div>
  );
}

export default SubmitSolution;
