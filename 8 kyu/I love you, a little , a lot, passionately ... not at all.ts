// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"

const howMuchILoveYou = (nbPetals) => {
  return [
    "not at all",
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
  ][nbPetals % 6];
};
