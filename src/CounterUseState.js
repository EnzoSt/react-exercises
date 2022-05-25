import { useEffect, useState } from "react";

export function CounterUseState() {
  const [counter, setCounter] = useState(0);

  function onCounterChange(counter) {
    console.log(`Counter changed to ${counter}`);
  }

  useEffect(() => {
    onCounterChange(counter);
  }, [counter]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <h2> Counter: {counter}</h2>
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}

