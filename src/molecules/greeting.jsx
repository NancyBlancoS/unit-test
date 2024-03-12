import React from 'react'

export default function Greeting() {
    const [message, setMessage] = React.useState('Hello, World!');

    const handleClick = () => {
        setMessage('Hello, User!');
    };
    return (
        <div>
            <p>{message}</p>
            <button onClick={handleClick}>Change Message</button>
        </div>
    )
}
