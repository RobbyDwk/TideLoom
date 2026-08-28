// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TideLoom title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TideLoom/i);
    expect(titleElement).toBeInTheDocument();
});
