import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState(state => ({
        count: state.count + this.props.incrementBy,
      }));
    }, 1000);
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
