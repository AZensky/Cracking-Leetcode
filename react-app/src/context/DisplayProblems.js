import { createContext, useContext, useState } from "react";

export const DisplayProblemsContext = createContext();

export const useDisplayProblemsContext = () =>
  useContext(DisplayProblemsContext);

export default function DisplayProblemsProvider(props) {
  const [displayProblems, setDisplayProblems] = useState(false);

  return (
    <DisplayProblemsContext.Provider
      value={{
        displayProblems,
        setDisplayProblems,
      }}
    >
      {props.children}
    </DisplayProblemsContext.Provider>
  );
}
