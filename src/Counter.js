import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState((state) => ({
        count: state.count + this.props.incrementBy,
      }));
    }, 1000);
  }

// (ANSWER) component-lifecycle-02:
// We should use the lifecycle method "componentWillUnmount" in order to clear the interval when the component is unmounted.

  componentWillUnmount(){
    if(this._interval)
    clearInterval(this._interval)
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}
