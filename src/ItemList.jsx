import React, { useState } from 'react';


function ItemList() {
    const [items, setItems] = useState([]); 
    const [newItem, setNewItem] = useState(''); 

    
    const addItem = () => {
        if (newItem.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem('');
        }
    };

    return (
        <div>
            <h2>Item List</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


function AppItem() {
    return (
        <div>
            <h1>Item List App</h1>
            <ItemList />
        </div>
    );
}

export default AppItem;
