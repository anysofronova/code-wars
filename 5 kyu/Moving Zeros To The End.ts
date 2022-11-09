// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of
// the other elements.

const moveZeros = (arr: []) =>
  arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
