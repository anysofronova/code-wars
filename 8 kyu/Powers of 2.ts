// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2
// with the exponent ranging from 0 to n ( inclusive ).

const powersOfTwo = (n: number) =>
  Array.from({ length: n + 1 }, (v, k) => 2 ** k);
