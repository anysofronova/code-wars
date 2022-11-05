// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character
// of the final pair with an underscore ('_').

const solution = (str: string) =>
  str ? str.match(/.{1,2}/gi)?.map((i) => i.padEnd(2, "_")) : [];
