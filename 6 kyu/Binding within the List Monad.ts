const bind = (list, func) =>
  list.map(func).reduce((acc, e) => [...acc, ...e], []);

console.log(
  bind([1, 2, 3], function (a) {
    return [a];
  })
);
