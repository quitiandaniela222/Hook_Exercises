import React, { useState } from 'react';

function ButtonCount() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Button Counter</h1>
            <Button />
        </div>
    );
}

export default ButtonCount;