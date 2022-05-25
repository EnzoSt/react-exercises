import React, { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setCount((c)=> c + 1);
    }, 1000);

    return () => {
      console.log("component unmounts");
    };
  }, []);

  return <h1>Counter: {count}</h1>;
}


// import React from "react";
// import { CounterDisplay } from "./CounterDisplay";

// export class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => ({
//         count: state.count + this.props.incrementBy,
//       }));
//     }, 1000);
//   }

//   render() {
//     return <CounterDisplay count={this.state.count} />;
//   }
// }

// // (ANSWER) component-lifecycle-01:
//   // If we use the method componentDidMount, the constructor is not required.

