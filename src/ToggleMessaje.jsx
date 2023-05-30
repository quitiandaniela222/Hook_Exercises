import React, { useState } from 'react';

function ButtonToggle() {
    const [showMessage, setShowMessage] = useState(false);
    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <button onClick={toggleMessage}>Toggle Message</button>
            {showMessage && <p>This is a hidden message!</p>}
        </div>
    );
}
function App() {
    return (
        <div>
            <h1>Toggle Message Button</h1>
            <ButtonToggle/>
        </div>
    );
}

export default ButtonToggle;