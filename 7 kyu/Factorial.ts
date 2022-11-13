// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers
// less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

const factorial = (n: number) => {
  if (n < 0 || n > 12) throw "RangeError";
  return Array.from({ length: n }, (v, i) => i + 1).reduce((a, b) => a * b, 1);
};
