// There is an array with some numbers. All numbers are equal except for one. Try to find it!

const findUniq = (arr: number[]) =>
  arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
