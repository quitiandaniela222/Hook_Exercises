import React, { useState } from 'react';


function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Buy groceries' },
        { id: 2, task: 'Clean the house' },
        { id: 3, task: 'Walk the dog' }
    ]);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}


function AppList() {
    return (
        <div>
            <h1>Todo List App</h1>
            <TodoList />
        </div>
    );
}

export default AppList;
