// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value
// of each of the number's decimal digits.

const sumDigits = (number) =>
  Math.abs(number)
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
