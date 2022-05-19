import React from "react";
import { Welcome } from "./Welcome";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
import { Login } from "./Login";
import { Container } from "./Container";

export class App extends React.Component {
  render() {
    return (
      <Container title="My React Application">
        {/* <Counter initialValue={0} incrementBy={1} /> */}
        {/* <Hello /> */}
        <Welcome />
        {/* <InteractiveWelcome /> */}
        {/* <ClickCounter /> */}
        {/* <ClickTracker /> */}
        <Login />
        {/* <TodoList /> */}
        {/* <UncontrolledLogin /> */}
      </Container>
    );
  }
}
