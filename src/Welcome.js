import React from "react";

export class Welcome extends React.Component {
  render() {
    return <p>Welcome, {this.props.name ?? "User"}!</p>;
  }
}

// We can also set a default value using an object through ComponentName.defaultProps.