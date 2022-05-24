import React from "react";
import { Welcome } from "./Welcome";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Counter } from "./Counter";
// import { Hello } from "./Hello";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { Login } from "./Login";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
  state ={
     language: "it"
  }
 
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  render() {
    return (
      <div>
        <select value={this.state.language} onChange={this.handleLanguageChange}>
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
          <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage />
          </LanguageContext.Provider>
        <Container title="My React Application">
          {/* <Counter initialValue={0} incrementBy={1} /> */}
          {/* <Hello /> */}
          <Welcome name="Leo"  age={21}/>
          {/* <InteractiveWelcome /> */}
          {/* <ClickCounter /> */}
          {/* <ClickTracker /> */}
          {/* <Login /> */}
          {/* <TodoList
            render={(items, RemoveItem) => {
              return (
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      {item}
                      <button type="button" onClick={() => RemoveItem(index)}>
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              );
            }}
          ></TodoList> */}
          {/* <UncontrolledLogin /> */}
        </Container>
      </div>
    );
  }
}
