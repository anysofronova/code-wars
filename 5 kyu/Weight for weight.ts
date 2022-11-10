// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list
// with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list".
// It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

const orderWeight = (strng: string) => {
  const f = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  const compare = (a, b) => {
    let sumA = f(a);
    let sumB = f(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  };
  return strng.split(" ").sort(compare).join(" ");
};
