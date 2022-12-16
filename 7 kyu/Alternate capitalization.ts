// Given a string, capitalize the letters that occupy even indexes and odd indexes separately,
// and return as shown below. Index 0 will be considered even.

const capitalize = (s) => [
  s
    .split("")
    .map((v, i) => (i % 2 ? v : v.toUpperCase()))
    .join(""),
  s
    .split("")
    .map((v, i) => (i % 2 ? v.toUpperCase() : v))
    .join(""),
];
