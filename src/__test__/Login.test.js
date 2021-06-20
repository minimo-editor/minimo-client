import React from 'react';
import { render } from '@testing-library/react';
import Login from '../components/Login/Login';
import { AuthProvider } from '../contexts/AuthContext';
import '@testing-library/jest-dom/extend-expect';

test('should display login ui when not logged in.', () => {
  render(
    <AuthProvider value={{ user: null }}>
      <Login />
    </AuthProvider>,
  );

  const firebaseLogin = document.getElementById('firebaseui_container');
  expect(firebaseLogin).toBeInTheDocument();
});
