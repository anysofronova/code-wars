// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

const snail = (arr) => {
  return arr.length > 1
    ? [
        ...arr.shift(),
        ...arr.map((e) => e.pop()),
        ...arr.pop().reverse(),
        ...arr.reverse().map((e) => e.shift()),
      ].concat(arr.length ? snail(arr.reverse()) : [])
    : arr[0];
};
