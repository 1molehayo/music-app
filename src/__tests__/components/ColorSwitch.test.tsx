import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorModeProvider from 'contexts/ColorMode';
import { ColorSwitch } from 'components';

const setup = (text: RegExp) => {
  const utils = render(<ColorSwitch />, {
    wrapper: ColorModeProvider
  });

  const input = utils.getByText(text);
  return {
    input,
    ...utils
  };
};

describe('When everything is OK in the color switch component', () => {
  test('should render the color switch component without crashing', () => {
    render(<ColorSwitch />, {
      wrapper: ColorModeProvider
    });
  });

  test('should be light theme by default', () => {
    const { input } = setup(/Light mode/);

    expect(input).toBeInTheDocument();
  });

  test('should toggle to dark mode', () => {
    const { input, getByText } = setup(/Light mode/);

    expect(input).toBeInTheDocument();

    fireEvent.click(input);

    expect(getByText(/Dark mode/)).toBeInTheDocument();
  });
});
