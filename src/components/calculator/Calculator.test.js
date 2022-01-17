// Test for Calculator.js component
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

it('renders without crashing', () => {
  const  ARR = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = ARR.map((button) => {
    return {
      label: button,
      value: button
    }
  });

  // test each button
  buttons.forEach((button) => {
    const { getByText } = render(<Calculator />);
    const buttonElement = getByText(button.label);
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(button.label);
  });
      
  render(<Calculator />);
  expect((<Calculator />)).toBeInTheDocument();
});

