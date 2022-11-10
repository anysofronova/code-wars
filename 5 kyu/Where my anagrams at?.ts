// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters.

function anagrams(word: string, words: string[]) {
  return words
    .map((i) => {
      return i.split("").sort().join("") === word.split("").sort().join("")
        ? i
        : "";
    })
    .filter((i) => i);
}
