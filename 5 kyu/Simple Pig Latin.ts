// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched.

const pigIt = (str: string) => str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
