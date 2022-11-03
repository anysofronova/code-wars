// Write a program that will calculate the number of trailing zeros in a factorial of a given number.
//
// N! = 1 * 2 * 3 *  ... * N
//
// Be careful 1000! has 2568 digits...

const zeros = (n: number) => (n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5));
