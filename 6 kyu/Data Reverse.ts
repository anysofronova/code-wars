// A stream of data is received and needs to be reversed.

const dataReverse = (data: []) => {
  const result = [];
  while (data.length) result.push(...data.splice(-8));
  return result;
};
