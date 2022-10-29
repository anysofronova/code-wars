// Complete the function that
// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

const solution = (first: number[], second: number[]) =>
  first.map((a, i) => Math.abs(a - second[i]) ** 2).reduce((a, b) => a + b, 0) /
  first.length;
