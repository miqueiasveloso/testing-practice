import calculator from '../modules/calculator'

test('add', () => {
    expect(calculator.add(3, 3)).toBe(6)
});

test('subtract', () => {
    expect(calculator.subtract(9, 4)).toBe(5)
});

test('divide', () => {
    expect(calculator.divide(6, 2)).toBe(3)
});

test('multiply', () => {
    expect(calculator.multiply(10, 10)).toBe(100)
});