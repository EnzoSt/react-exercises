const defaultState = [];

const ADD = "USERS@ADD";
const REMOVE = "USERS@REMOVE";
const EDIT = "USERS@EDIT";
const CLEAR = "USERS@CLEAR";

export function addUser(user) {
  return {
    type: ADD,
    payload: user,
  };
}

export function removeUser(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export function editUser(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}

export function clearUser() {
  return {
    type: CLEAR,
  };
}

export function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD: {
      //   return state.concat(action.payload);
      return [...state, action.payload];
    }
    case REMOVE: {
      return state.filter((user) => user.id !== action.payload);
    }
    case EDIT: {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return { ...user, ...action.payload.data };
        }
        return user;
      });
    }
    case CLEAR: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}