import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';

describe('When everything is OK in the Home page', () => {
  test('should render the Home page without crashing', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});
