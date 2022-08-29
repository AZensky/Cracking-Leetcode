const ADD_SOLUTION = "/solutions/ADD_SOLUTION";
const EDIT_SOLUTION = "/solutions/EDIT_SOLUTION";

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

// thunk action create to create a solution
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

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
