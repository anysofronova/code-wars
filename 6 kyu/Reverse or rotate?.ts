// The input is a string str of digits. Cut the string into chunks
// (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
//
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2,
// reverse that chunk; otherwise rotate it to the left by one position. Put together these modified
// chunks and return the result as a string.

const revrot = (str: string, sz: number) => {
  const check = (v) =>
    v.split("").reduce((cubeSum, d) => (cubeSum += d ** 3), 0) % 2 === 0;
  const reverse = (v) => v.split("").reverse().join("");
  const rotate = (v) => v.slice(1) + v.slice(0, 1);

  return (str.match(new RegExp(".{" + sz + "}", "g")) || [])
    .map((v) => (check(v) ? reverse(v) : rotate(v)))
    .join("");
};
