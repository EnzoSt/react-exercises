import React from "react";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
// import { InteractiveWelcome } from "./InteractiveWelcome";
import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { Login } from "./Login";

export class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Counter initialValue={0} incrementBy={1} /> */}
        {/* <Hello /> */}
        {/* <InteractiveWelcome /> */}
        {/* <ClickCounter /> */}
        {/* <ClickTracker /> */}
        {/* <Login /> */}
        <TodoList />
        {/* <UncontrolledLogin /> */}
      </div>
    );
  }
}
