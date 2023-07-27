const removeDuplicateWords = (s: string) =>
  [...new Set(s.split(" "))].join(" ");
