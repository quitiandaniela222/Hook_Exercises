import React, { useState } from 'react';


function CommentForm() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Comment:', comment);
        
    };

    return (
        <div>
            <h2>Comment Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


function AppComment() {
    return (
        <div>
            <h1>Comment App</h1>
            <CommentForm />
        </div>
    );
}

export default AppComment;
