// Write a function that takes a single string (word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = (word: string) =>
  word
    .split("")
    .map((i, j) => (i === i.toUpperCase() ? j : undefined))
    .filter((i) => i != undefined);
