// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

const generateHashtag = (str: string) =>
  str.length > 140 || str.length < 1
    ? false
    : ("# " + str)
        .trim()
        .replace(/(\s\w)/g, ($0, $1) => $1.slice(1).toUpperCase());
