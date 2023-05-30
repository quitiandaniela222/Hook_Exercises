import React, { useState } from 'react';


function ColorPicker() {
    const [color, setColor] = useState('');


    const handleChangeColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <div>
            <h2>Color Picker</h2>
            <input
                type="color"
                value={color}
                onChange={handleChangeColor}
            />
            <p>Selected Color: {color}</p>
        </div>
    );
}


function ColorApp() {
    return (
        <div>
            <h1>Color Picker App</h1>
            <ColorPicker />
        </div>
    );
}

export default ColorApp;
