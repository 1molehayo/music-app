import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from 'components';
import userEvent from '@testing-library/user-event';
import SearchProvider from 'contexts/Search';

const setup = (text: string) => {
  const utils = render(<SearchBar />, {
    wrapper: SearchProvider
  });

  const input = utils.getByLabelText(text) as HTMLInputElement;
  const button = utils.getByLabelText(text);

  return {
    input,
    button,
    ...utils
  };
};

describe('When everything is OK in the search component', () => {
  test('should render the search component without crashing', () => {
    render(<SearchBar />, {
      wrapper: SearchProvider
    });
  });

  test('should be empty input field by default', () => {
    const { input } = setup('search-input');
    expect(input.value).toBe('');
  });

  test('should change input field value when text is inputted', async () => {
    const { input } = setup('search-input');

    await userEvent.type(input, 'Jack');
    expect(input.value).toBe('Jack');
  });

  test('should be disabled button by default', () => {
    const { button } = setup('search-button');
    expect(button).toBeDisabled();
  });

  test('should redirect to search page and update history when the search button is clicked', async () => {
    const onClick = jest.fn();

    const { getByRole } = render(<SearchBar onSearch={() => onClick()} />, {
      wrapper: SearchProvider
    });

    fireEvent.change(getByRole('textbox'), {
      target: { value: 'Jack' }
    });

    fireEvent.click(getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
