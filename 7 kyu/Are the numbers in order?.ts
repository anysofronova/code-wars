// 1
const inAscOrder = (arr: number[]) =>
  arr.join("") === arr.sort((a, b) => a - b).join("");

// 2
const inAscOrder2 = (arr: number[]) =>
  arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);

console.log(inAscOrder2([1, 2, 3, 4, 5]));
