// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

const multiTable = (n: number) =>
  [...Array(10)].map((_, i) => `${i + 1} * ${n} = ${n * i + n}`).join("\n");
