import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { AuthProvider } from '../../contexts/AuthContext';
import '@testing-library/jest-dom/extend-expect';

test('should display basic elements.', () => {
  render(
    <AuthProvider value={{ user: null }}>
      <App />
    </AuthProvider>,
  );

  const homeButton = screen.getByText('minimo');
  expect(homeButton).toBeInTheDocument();

  const startButton = screen.getByText('Get Started');
  expect(startButton).toBeInTheDocument();
});
