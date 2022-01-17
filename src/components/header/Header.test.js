// Test forHeader.js component
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

it('renders without crashing', () => {
  render(<Header />);
});

it('should display the correct title', () => {
  const { getByText } = render(<Header />);
  expect(getByText('Calculator')).toBeInTheDocument();
});
