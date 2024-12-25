import { createSlice } from "@reduxjs/toolkit";
const items = {
  FRUIT: ["APPLE", "BANANA", "ORANGE", "GRAPE"],
  CLOTHE: ["SHIRT", "PANTS", "JACKET", "DRESS"],
  VERB: ["RUN", "JUMP", "EAT", "SLEEP", "WRITE", "READ"],
};
function getRandomItem() {
  const categories = Object.keys(items);
  const randomCategory =
  categories[Math.floor(Math.random() * categories.length)];
  const categoryItems = items[randomCategory];
  const randomItem =
  categoryItems[Math.floor(Math.random() * categoryItems.length)];
  return { category: randomCategory, word: randomItem };
}
function transFormWord(word) {
  return word.split("").map((char) => ({
    char: char,
    isMatched: "",
  }));
}
const randomCategoryItem = getRandomItem();
const HangmanSlice = createSlice({
  name: "hangman",
  initialState: {
    randomCategory: randomCategoryItem.category,
    randomHintWord: randomCategoryItem.word,
    maxAttepts: 6,
    score: 0,
    guessWord: transFormWord(randomCategoryItem.word),
    wrongRight: [],
  },
  reducers: {
    playerInput: (state, action) => {
      const word = state.randomHintWord;
      if (word.includes(action.payload)) {
        state.guessWord.forEach((item) =>
          item.char === action.payload ? (item.isMatched = true) : ""
        );
        state.wrongRight.push(
          state.guessWord.filter((item) => item.isMatched == true)
        );
        state.score += 10;
      } else {
        state.wrongRight.push({ char: action.payload, isMatched: false });
        if (state.maxAttepts > 1) {
          state.maxAttepts--
        }
      }
    },
  },
});
export const { playerInput } = HangmanSlice.actions;
export default HangmanSlice.reducer;

export const selectgueesData = (state) => {
  return state.hangman.guessWord;
};
export const selectAllState = (state) => {
  return state.hangman;
};
