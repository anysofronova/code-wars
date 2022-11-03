// In this example you have to validate if a user input string is alphanumeric.
// The given string is not nil/null/NULL/None, so you don't have to check that.

const alphanumeric = (string: string) => /^([a-zA-Z0-9])+$/gi.test(string);
