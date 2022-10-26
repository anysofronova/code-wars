// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to
// the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

const narcissistic = (value) =>
  value
    .toString()
    .split("")
    .reduce(function (prev, el) {
      return prev + Math.pow(el, String(value).length);
    }, 0) == value;
