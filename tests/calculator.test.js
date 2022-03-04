import calculator from '../functions/calculator.js';

test('sum of 2 numbers if correct', () => {
    expect(calculator.add(5, 6)).toBe(11);
});

test('difference between 2 numbers if correct', () => {
    expect(calculator.sub(10, 5)).toBe(5);
});

test('multliplication of 2 numbers if correct', () => {
    expect(calculator.mult(5, 6)).toBe(30);
});

test('division of 2 numbers if correct', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

