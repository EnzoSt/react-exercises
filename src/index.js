// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { App } from "./App";
import "./index.css";
// import { Root } from "./Root";
// import { incrementCounter } from "./state/CounterState";
import { Store } from "./state/Store";
import { addTodo, editTodo, removeTodo } from "./state/TodosState";

// const rootElement = document.querySelector("#root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Root />
//   </StrictMode>
// );
Store.subscribe(() => {
  console.log(Store.getState());
});

// Store.dispatch(incrementCounter(10));
Store.dispatch(addTodo({ id: 1, title: "Do homework", completed: false }));
Store.dispatch(editTodo(1, { completed: true }));
Store.dispatch(addTodo({ id: 2, title: "Buy cheese", completed: false }));
Store.dispatch(removeTodo(1))
