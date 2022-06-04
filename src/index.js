import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "./App";
import "./index.css";
import { Root } from "./Root";
import { incrementCounter } from "./state/CounterState";
import { Store } from "./state/Store";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Root />
//   </StrictMode>
// );

Store.subscribe(() => {
  console.log(Store.getState())
})

Store.dispatch(incrementCounter(10))
