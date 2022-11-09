// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
// representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range
// must be rounded to the closest valid value.

const rgb = (r: number, g: number, b: number) => {
  const colorize = (v) =>
    v > 255 ? "FF" : v < 0 ? "00" : v.toString(16).padStart(2, "0");
  return `${colorize(r)}${colorize(g)}${colorize(b)}`.toUpperCase();
};
