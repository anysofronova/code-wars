const wordsToMarks = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return string
    .split("")
    .reduce((acc, val) => acc + alphabet.indexOf(val) + 1, 0);
};

console.log(wordsToMarks("love"));
