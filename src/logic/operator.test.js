// Unit Test for operator.js
import operate from './operate';

test('operate', () => {
  expect(operate(1, 2, '+')).toBe('3');
  expect(operate(1, 2, '-')).toBe('-1');
  expect(operate(1, 2, 'x')).toBe('2');
  expect(operate(1, 2, '÷')).toBe('0.5');
  expect(operate(1, 2, '%')).toBe('0.01');
  expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  expect(operate(1, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
});

test('operate with invalid operation', () => {
  expect(() => {
    operate(1, 2, '*');
  }).toThrowError(/Unknown operation/);
});

test('operate with invalid number', () => {
  expect(() => {
    operate(1, 'a', '+');
  }).toThrowError(/Invalid number/);
});

test('operate with invalid number and operation', () => {
  expect(() => {
    operate('a', 'b', 'c');
  }).toThrowError(/Invalid number/);
});
