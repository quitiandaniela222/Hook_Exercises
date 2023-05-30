import React, { useState } from 'react';


function UserList() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ]);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

function AppPeople() {
    return (
        <div>
            <h1>User List App</h1>
            <UserList />
        </div>
    );
}

export default AppPeople;
