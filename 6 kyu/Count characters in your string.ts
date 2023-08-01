// The main idea is to count all the occurring characters in a string. If you have a string like aba,
// then the result should be {'a': 2, 'b': 1}.
//
// What if the string is empty? Then the result should be empty object literal, {}.

const count = (string: string) => {
  const obj = {};
  for (let i of string.split("")) i in obj ? (obj[i] += 1) : (obj[i] = 1);
  return obj;
};
