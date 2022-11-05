// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single
// integer N. Write a method that takes the array as an argument and returns this "outlier" N.

const findOutlier = (integers: []) => {
  const odd = integers.filter((i) => i & 1);
  const even = integers.filter((i) => !(i & 1));
  return odd.length === 1 ? odd[0] : even[0];
};
