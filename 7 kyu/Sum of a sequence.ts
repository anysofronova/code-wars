// Your task is to make function, which returns the sum of a sequence of integers.
//
// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
//
// If begin value is greater than the end, function should returns 0

const sequenceSum = (b: number, e: number, s: number) =>
  b > e ? 0 : b + sequenceSum(b + s, e, s);
