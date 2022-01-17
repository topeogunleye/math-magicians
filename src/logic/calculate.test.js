//Unit Test for calculate.js
import { calculate } from './calculate';

test('calculate', () => {
  expect(calculate(1, 2, '+')).toBe('3');
  expect(calculate(1, 2, '-')).toBe('-1');
  expect(calculate(1, 2, 'x')).toBe('2');
  expect(calculate(1, 2, '÷')).toBe('0.5');
  expect(calculate(1, 2, '%')).toBe('0.01');
  expect(calculate(1, 0, '÷')).toBe('Can\'t divide by 0.');
  expect(calculate(1, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
});

test('calculate with invalid operation', () => {
  expect(() => {
    calculate(1, 2, '*');
  }).toThrowError(/Unknown operation/);
} );

test('calculate with invalid number', () => {
  expect(() => {
    calculate(1, 'a', '+');
  }).toThrowError(/Invalid number/);
} );

test ('calculate with invalid number and operation', () => {
  expect(() => {
    calculate('a', 'b', 'c');
  }).toThrowError(/Invalid number/);
} );

