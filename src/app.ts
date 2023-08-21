class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

async function main(): Promise<void> {
  const calculator = new Calculator();
  const result = calculator.add(1, 1);
  console.log('Result of 1 + 1 is', result);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch(console.error);
