import { useEffect, useState } from "react";

export function CounterUseState({ initialCount = 0 }) {
  const [counter, setCounter] = useState(initialCount);

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

