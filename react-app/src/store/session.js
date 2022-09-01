// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const ADD_PROBLEM_SOLVED = "session/ADD_PROBLEM_SOLVED";
const REMOVE_PROBLEM_SOLVED = "session/REMOVE_PROBLEM_SOLVED";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const addSolved = (info) => ({
  type: ADD_PROBLEM_SOLVED,
  payload: info,
});

const removeSolved = (problemId) => ({
  type: REMOVE_PROBLEM_SOLVED,
  payload: problemId,
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (username, password) => async (dispatch) => {
  console.log("USERNAME", username);
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Username: username,
      Password: password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp = (username, password) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Username: username,
      Password: password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const addSolvedProblem = (userId, problemId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/problems-solved/${problemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, problemId }),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(addSolved(data));
    return data;
  }
};

export const removeSolvedProblem = (userId, problemId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}/problems-solved/${problemId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(removeSolved(problemId));
    return data;
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
    case ADD_PROBLEM_SOLVED: {
      let newState = global.structuredClone(state);

      let problemInfo = {};
      problemInfo.id = action.payload.id;
      problemInfo.problemId = action.payload.problemId;
      problemInfo.userId = action.payload.userId;
      newState.user.problemsSolved.push(problemInfo);

      return newState;
    }
    case REMOVE_PROBLEM_SOLVED: {
      let newState = global.structuredClone(state);

      let newArr = newState.user.problemsSolved.filter(
        (problem) => problem.problemId !== action.payload
      );

      newState.user.problemsSolved = newArr;

      return newState;
    }
    default:
      return state;
  }
}
