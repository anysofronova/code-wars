// In this little assignment you are given a string of space separated numbers, and have to return the highest
// and lowest number.

const highAndLow = (numbers) =>
  `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;
