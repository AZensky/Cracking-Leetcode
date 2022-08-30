const LOAD_SOLUTIONS = "/solutions/LOAD_SOLUTONS";
const ADD_SOLUTION = "/solutions/ADD_SOLUTION";
const EDIT_SOLUTION = "/solutions/EDIT_SOLUTION";
const DELETE_SOLUTION = "/solutions/DELETE_SOLUTION";

//action creator to load all solutions for a problem
export const loadAllSolutions = (solutions) => {
  return {
    type: LOAD_SOLUTIONS,
    payload: solutions,
  };
};

// action creator to add a solution
export const addSolution = (info) => {
  return {
    type: ADD_SOLUTION,
    payload: info,
  };
};

// action creator to edit a solution
export const edit = (info) => {
  return {
    type: EDIT_SOLUTION,
    payload: info,
  };
};

// action creator to delete a solution
export const remove = (solutionId) => {
  return {
    type: DELETE_SOLUTION,
    payload: solutionId,
  };
};

// thunk action creator to load a problem's solutions
export const loadSolutions = (problemId) => async (dispatch) => {
  const res = await fetch(`/api/problems/${problemId}/solutions`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadAllSolutions(data.Solutions));
    return data.Solutions;
  }
};

// thunk action creator to create a solution
export const createSolution = (problemId, info) => async (dispatch) => {
  const res = await fetch(`/api/problems/${problemId}/solutions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(createSolution(data));
    return data;
  }
};

// thunk action creator to edit a solution
// prettier-ignore
export const editSolution = (problemId, solutionId, info) => async (dispatch) => {
    const res = await fetch(
      `/api/problems/${problemId}/solutions/${solutionId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    if (res.ok) {
      const data = await res.json();
      dispatch(edit(data));
      return data;
    }
  };

// thunk action creator to delete a solution
export const deleteSolution = (problemId, solutionId) => async (dispatch) => {
  const res = await fetch(
    `/api/problems/${problemId}/solutions/${solutionId}`,
    {
      method: "DELETE",
    }
  );

  if (res.ok) {
    const data = await res.json();
    dispatch(remove(solutionId));
    return data;
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SOLUTIONS: {
      const allSolutions = action.payload;
      return {
        ...allSolutions,
      };
    }

    case ADD_SOLUTION: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    }

    case EDIT_SOLUTION: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    }

    case DELETE_SOLUTION: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }

    default:
      return state;
  }
}
