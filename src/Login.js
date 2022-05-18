import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handlerInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  onLogin = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          placeholder="Enter your name"
          onChange={this.handlerInputChange}
        ></input>
        <input
          name="password"
          value={this.state.password}
          placeholder="Password"
          type="password"
          onChange={this.handlerInputChange}
        ></input>
        <input
          name="remember"
          checked={this.state.remember}
          type="checkbox"
          onChange={this.handlerInputChange}
        ></input>
        <button type="submit" disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>Login</button>
      </div>
    );
  }
}
