import Calculator from './app';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers correctly', () => {
    const result = calculator.add(3, 5);
    expect(result).toBe(8);
  });

  test('should subtract two numbers correctly', () => {
    const result = calculator.subtract(10, 4);
    expect(result).toBe(6);
  });
});
