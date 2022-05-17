import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={"Leo"} age={18} />
        <Counter initialValue={0} incrementBy={1} />
        <ClickCounter />
      </div>
    );
  }
}
