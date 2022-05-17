import React from "react";

export class ClickTracker extends React.Component {
  state = {
    lastClicked: "",
  };

  handleLastClick = (event) => {
    this.setState({
      lastClicked: event.target.name,
    });
  };

  render() {
    return (<div>
        <button name="button1" onClick={this.handleLastClick}>Button 1</button>
        <button name="button2" onClick={this.handleLastClick}>Button 2</button>
        <button name="button3" onClick={this.handleLastClick}>Button 3</button>
        <h1>{this.state.lastClicked}</h1>
    </div>);
  }
}
