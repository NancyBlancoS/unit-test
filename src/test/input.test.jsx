// Greeting.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

test('button changes message with user name when clicked', () => {
    render(<Greeting />);
    
    const nameInput = screen.getByTestId('name-input');
    userEvent.type(nameInput, 'Nancy');

    const button = screen.getByTestId('greeting-button');
    userEvent.click(button);

    const greetingMessage = screen.getByTestId('greeting-message');
    expect(greetingMessage).toHaveTextContent('Hello, Nancy!');
});
