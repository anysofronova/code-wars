// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where
// the first one is the total weight of team 1, and the second one is the total weight of team 2.

const rowWeights = (array: number[]) => {
  for (var i = 0, arr = [0, 0]; i < array.length; i++)
    i % 2 == 1 ? (arr[1] += array[i]) : (arr[0] += array[i]);
  return arr;
};
