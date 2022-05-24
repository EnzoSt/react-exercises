import { useState } from "react"

export function CounterUseState({ initialCount = 0 }) {
   const [counter, setCounter] = useState(initialCount)

    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }

    return (
        <div>
            <h2> Counter: {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )

}
