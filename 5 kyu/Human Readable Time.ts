// Write a function, which takes a non-negative integer (seconds) as input and returns
// the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

const humanReadable = (seconds: number) => {
  const f = (s) => String(s).padStart(2, "0");
  return `${f(Math.floor(seconds / 3600))}:${f(
    Math.floor((seconds / 60) % 60)
  )}:${f(Math.floor(seconds % 60))}`;
};
