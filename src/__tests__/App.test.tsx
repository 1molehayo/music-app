import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('When everything is OK in the App component', () => {
  test('should render the App component without crashing', () => {
    render(<App />);
  });
});
