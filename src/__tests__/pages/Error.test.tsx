import React from 'react';
import { render } from '@testing-library/react';
import Error from 'pages/Error';
import { BrowserRouter } from 'react-router-dom';

const setup = (text: string) => {
  const utils = render(
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );

  const input = utils.getByText(text);
  return {
    input,
    ...utils
  };
};

describe('When everything is OK in the Error page', () => {
  test('should render the error page without crashing', () => {
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );
  });

  test('should show 404 text', () => {
    const { input } = setup('404');

    expect(input).toBeInTheDocument();
  });
});
