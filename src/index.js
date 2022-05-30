import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "./App";
import "./index.css";
import { Root } from "./Root";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
