// There exist two zeroes: +0 (or just 0) and -0.

const isNegativeZero = (n: number) => Object.is(n, -0);
