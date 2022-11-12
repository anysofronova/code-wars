// "A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed
// divisor without performing the division, usually by examining its digits."

const thirt = (n: number) => {
  const sum = n
    .toString()
    .split("")
    .reverse()
    .reduce((acc, cur, idx) => acc + Number(cur) * (10 ** idx % 13), 0);
  return sum === n ? n : thirt(sum);
};
