import React, { useState } from 'react';

function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [inputValue, setInputValue] = useState();
    

    const addItem = () => {
        if (inputValue !=="") {
            setCart(prevCart => [...prevCart, inputValue]);
            setInputValue("");
        }
    };

    const handleInputChange = event => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>

            <input value={inputValue} onChange={handleInputChange}/>
            <button onClick={addItem}>Add</button>
            <ul>
                {cart.map((item, index) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
