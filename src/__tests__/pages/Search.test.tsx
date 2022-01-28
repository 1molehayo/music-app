import React from 'react';
import { render } from '@testing-library/react';
import Search from 'pages/Search';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter } from 'react-router-dom';

const setup = (text: string) => {
  const utils = render(
    <Provider store={store}>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </Provider>
  );

  const card = utils.getByText(text);
  return {
    card,
    ...utils
  };
};

describe('When the search results returns no results', () => {
  test('should render the empty artist card', () => {
    const { card } = setup('No artist available!');
    expect(card).toBeInTheDocument();
  });

  test('should render the empty album card', () => {
    const { card } = setup('No album available!');
    expect(card).toBeInTheDocument();
  });

  test('should render the empty song card', () => {
    const { card } = setup('No song available!');
    expect(card).toBeInTheDocument();
  });
});
