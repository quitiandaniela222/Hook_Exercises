import React, { useState } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', age: 0 });


    const addUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ name: '', age: 0 });
    };

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
                type="number"
                placeholder="Age"
                value={newUser.age}
                onChange={(e) => setNewUser({ ...newUser, age: parseInt(e.target.value) })}
            />
            <button onClick={addUser}>Add User</button>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        Name: {user.name}, Age: {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}


function UserApp() {
    return (
        <div>
            <h1>User List App</h1>
            <UserList />
        </div>
    );
}

export default UserApp;
