// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded
// by voice and digital data communication channels, it still has its use in some applications around the world.

const decodeMorse = (morseCode: string) => {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");
};
