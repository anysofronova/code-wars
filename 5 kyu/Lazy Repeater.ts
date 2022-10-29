// The makeLooper() function (make_looper in Python) takes a string (of non-zero length) as an argument.
// It returns a function. The function it returns will return successive characters of the string on successive
// invocations. It will start back at the beginning of the string once it reaches the end.

const makeLooper =
  (str: string, i: number = 0) =>
  () =>
    str[i++ % str.length];
