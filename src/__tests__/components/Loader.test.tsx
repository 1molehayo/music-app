import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from 'components';

describe('When everything is OK in the Loader component', () => {
  test('should render the loader without crashing', () => {
    render(<Loader />);
  });
});
