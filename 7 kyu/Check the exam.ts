// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one
// contains a student's submitted answers.
//
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for
// each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string
// (in C the space character is used).
//
// If the score < 0, return 0.

const checkExam = (array1: string[], array2: string[]) => {
  for (var i = 0, sum = 0; i < array1.length; i++)
    if (array2[i]) array1[i] == array2[i] ? (sum += 4) : (sum -= 1);
  return Math.max(sum, 0);
};
