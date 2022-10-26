// Define a function that takes an integer argument and returns a logical value true
// or false depending on if the integer is a prime.
//
// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that
// has no positive divisors other than 1 and itself.

const isPrime = (num: number) => {
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return num > 1;
};
