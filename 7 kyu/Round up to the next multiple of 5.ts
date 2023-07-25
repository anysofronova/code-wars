// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

const roundToNext5 = (n: number) => (n % 5 ? Math.ceil(n / 5) * 5 : n);
