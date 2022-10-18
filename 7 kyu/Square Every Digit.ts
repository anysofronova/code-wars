// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

const squareDigits = (num: number) =>
  +num
    .toString()
    .split("")
    .map((i) => +i * +i)
    .join("");
