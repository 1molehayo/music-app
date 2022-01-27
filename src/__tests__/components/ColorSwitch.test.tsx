import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorModeProvider from 'contexts/ColorMode';
import { ColorSwitch } from 'components';

describe('When everything is OK in the color switch component', () => {
  test('should render the App component without crashing', () => {
    render(<ColorSwitch />, {
      wrapper: ColorModeProvider
    });
  });

  test('should be light theme by default', () => {
    const { getByText } = render(<ColorSwitch />, {
      wrapper: ColorModeProvider
    });

    expect(getByText(/Light mode/)).toBeInTheDocument();
  });

  test('should toggle to dark mode', () => {
    const { getByText } = render(<ColorSwitch />, {
      wrapper: ColorModeProvider
    });

    expect(getByText(/Light mode/)).toBeInTheDocument();

    fireEvent.click(getByText(/Light mode/));

    expect(getByText(/Dark mode/)).toBeInTheDocument();
  });
});
