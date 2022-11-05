// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of
// those numbers in the form of a phone number.

const createPhoneNumber = (numbers: number[]) => {
  const f = (a, b) => numbers.slice(a, b).join("");
  return `(${f(0, 3)}) ${f(3, 6)}-${f(6, 11)}`;
};
