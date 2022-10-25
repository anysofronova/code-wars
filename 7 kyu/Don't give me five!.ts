// In this kata you get the start number and the end number of a region and should return the count of all
// numbers except numbers with a 5 in it. The start and the end number are both inclusive!

const dontGiveMeFive = (start: number, end: number) => {
  return [...Array(end - start + 1).keys()]
    .map((i) => i + start)
    .reduce(
      (acc, item) => (acc += String(item).indexOf("5") !== -1 ? 0 : 1),
      0
    );
};
