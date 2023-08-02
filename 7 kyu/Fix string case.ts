// 1
const solve = (s: string) => {
  let cap = 0;
  for (let i of s) {
    if (i.toUpperCase() === i) cap++;
  }
  return cap > s.length - cap ? s.toUpperCase() : s.toLowerCase();
};

// 2
const solve2 = (s: string) => {
  const cap = s.split("").filter((i) => i.toUpperCase() === i).length;
  return cap > s.length - cap ? s.toUpperCase() : s.toLowerCase();
};

console.log(solve2("COde"));
