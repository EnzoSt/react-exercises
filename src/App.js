import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={0} incrementBy={1} />
        <Hello />
        <ClickCounter />
        <Welcome name={"Leo"} age={18} />
        <ClickTracker />
      </div>
    );
  }
}
