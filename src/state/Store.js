
import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterState";
import { todosReducer } from "./TodosState";

// export const Store = createStore(counterReducer)
// export const Store = createStore(todosReducer)

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todosReducer,
});

export const Store = createStore(rootReducer)