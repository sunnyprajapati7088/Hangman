import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
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
      const { char, setIsShow } = action.payload;
      if (word.includes(char)) {
        state.guessWord.forEach((item) =>
          item.char === char ? (item.isMatched = true) : ""
        );
        state.wrongRight.push(
          {char:char,isMatched:true}
        );
        state.score += 10;
        state.wrongRight.map((item) => item.char == char && item.isMatched == true ? setIsShow("green") : "");
        
      } else {
        state.wrongRight.push({ char: char, isMatched: false });
        if (state.maxAttepts > 0) {
          state.maxAttepts--
        }
         setIsShow("red");
      }
    },
    resetState: (state, action) => {
         (state.randomCategory = randomCategoryItem.category),
         (state.randomHintWord = randomCategoryItem.word),
         (state.maxAttepts = 6),
         (state.score = 0),
         (state.guessWord = transFormWord(randomCategoryItem.word)),
         (state.wrongRight = []);
     
    }
  },
});
export const { playerInput, resetState } = HangmanSlice.actions;
export default HangmanSlice.reducer;

export const selectgueesData = (state) => {
  return state.hangman.guessWord;
};
export const selectAllState = (state) => {
  return state.hangman;
};

export const selectCorrectGuessWordLength=(state)=>{
  let correctWordLength = 0;
 state.hangman.guessWord.forEach((element) => { element.isMatched == true ? correctWordLength++ : "" })
  return correctWordLength;
}