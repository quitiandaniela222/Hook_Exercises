import React, { useState } from 'react';


function UserForm() {
    const [user, setUser] = useState({ name: '', age: 0 });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>User Form</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={user.age}
                    onChange={handleChange}
                />
            </label>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
}


function AppForm() {
    return (
        <div>
            <h1>User Form App</h1>
            <UserForm />
        </div>
    );
}

export default AppForm;
