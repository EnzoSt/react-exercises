const defaultState = [];

const ADD = "TODOS@ADD";
const EDIT = "TODOS@EDIT";
const REMOVE = "TODOS@REMOVE";

export function addTodo(todo) {
  return {
    type: ADD,
    payload: todo,
  };
}

export function editTodo(id, data) {
  return {
    type: EDIT,
    payload: { id, data },
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload.data };
        }
        return todo;
      });
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
