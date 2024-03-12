// Greeting.test.js
import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Greeting from './Greeting';

test('button changes message when clicked', () => {
    render(<Greeting />);
    
    const messageBeforeClick = screen.getByText('Hello, World!');
    expect(messageBeforeClick).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Change Message' });
    userEvent.click(button);

    const messageAfterClick = screen.getByText('Hello, User!');
    expect(messageAfterClick).toBeInTheDocument();
});
