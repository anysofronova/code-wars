// 1
const sumOfMinimums = (arr) =>
  arr.map((i) => Math.min(...i)).reduce((acc, val) => acc + val, 0);

// 2
const sumOfMinimums2 = (arr) =>
  arr.reduce((acc, val) => acc + Math.min(...val), 0);

console.log(
  sumOfMinimums2([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
