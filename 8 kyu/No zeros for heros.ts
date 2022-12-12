// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.

const noBoringZeros = (n: number) => +`${n}`.replace(/0*$/, "");
