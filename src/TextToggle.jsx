import React, { useState } from 'react';


function ButtonTextToggle() {
    const [text, setText] = useState('Click Me');
    const toggleText = () => {
        setText(text === 'Click Me' ? 'Clicked!' : 'Click Me');
    };

    return (
        <div>
            <button onClick={toggleText}>{text}</button>
        </div>
    );
}

function TextButton() {
    return (
        <div>
            <h1>Toggle Button Text</h1>
            <ButtonTextToggle />
        </div>
    );
}

export default TextButton;
