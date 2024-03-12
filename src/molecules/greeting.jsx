import React from 'react'

export default function Greeting() {
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('Hello, World!');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleClick = () => {
        setMessage(`Hello, ${name || 'World'}!`);
    };

    return (
        <div>
            <input type="text" placeholder="Enter your name" value={name} onChange={handleChange} data-testid="name-input" />
            <p data-testid="greeting-message" >{message}</p>
            <button onClick={handleClick} data-testid="greeting-message" >Change Message</button>
        </div>
    )
}
