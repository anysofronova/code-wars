// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the
// total time required for all the customers to check out!

const queueTime = (customers: number[], n: number) => {
  const arr = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let idx = arr.indexOf(Math.min(...arr));
    arr[idx] += customers[i];
  }
  return Math.max(...arr);
};
