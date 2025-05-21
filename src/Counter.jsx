import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <>
            Count: {count >= 0 ? count : reset()}
            <button onClick={increment}>Click + 1</button>
            <button onClick={decrement}>Click - 1</button>
        </>
    );
}

export default Counter;
