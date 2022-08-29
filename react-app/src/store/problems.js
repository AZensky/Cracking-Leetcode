const LOAD_PROBLEMS = "/problems/LOAD_PROBLEMS";

const loadAllProblems = (problems) => {
  return {
    type: LOAD_PROBLEMS,
    payload: problems,
  };
};

export const loadProblems = () => async (dispatch) => {
  const res = await fetch("/api/problems");

  if (res.ok) {
    const data = await res.json();
    dispatch(loadAllProblems(data));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROBLEMS:
      const allProblems = action.payload;
      return {
        ...allProblems,
      };

    default:
      return state;
  }
}
