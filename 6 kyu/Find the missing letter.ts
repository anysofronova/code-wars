// Write a method that takes an array of consecutive (increasing) letters as input and that
// returns the missing letter in the array.
//
// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

const findMissingLetter = (array: string[]) => {
  let i = array[0].charCodeAt(0);
  return String.fromCharCode(
    array.find((el) => el.charCodeAt(0) != i++).charCodeAt(0) - 1
  );
};
