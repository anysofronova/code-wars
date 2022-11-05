// Write a function that takes a string of braces, and determines if the order of the braces is valid.
// It should return true if the string is valid, and false if it's invalid.

const validBraces = (s: string) => {
  while (s.includes("[]") || s.includes("()") || s.includes("{}")) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  }
  return s.length === 0;
};
