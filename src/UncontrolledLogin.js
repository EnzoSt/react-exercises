import { createRef } from "react";
import React from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();


  handleFormSubmit = (event) => {
    event.preventDefault();

    const UserName = event.target.elements.username.value;
    const Password = event.target.elements.password.value;
    const Remember = event.target.elements.remember.checked;

    console.log("Login", { UserName, Password, Remember });
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" placeholder="Enter your name"/>
          <input name="password" placeholder="Password" type="password" />
          <input name="remember" type="checkbox" />
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
