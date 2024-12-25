import { addListener } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { playerInput } from "../Redux/HangmanSlice";
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
  return { category: randomCategory, item: randomItem };
}
function transFormWord(word) {
  return word.split("").map((char) => ({
    char: char,
    isMatched: false,
  }));
}
const englishAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function HangManGame() {
  const [randomItem, setRandomItem] = useState(getRandomItem());
  const [guessWord, setguessWord] = useState(transFormWord(randomItem.item));
  const [turns, setTurns] = useState(6);
  const [flag, setFlag] = useState([]);
  
  function handleInput(char) {
    setFlag(
      guessWord.map((element) =>
        element.char == char ? (element.isMatched = true) : false
      )
    );
  }
  function findFlagForturns(flag) {
    console.log(flag)
    for (let i = 0; i < flag.length; i++) {
      if (flag[i] == true) {
        return false;
      }
    }
    return true;
  }
  function handleTurns(flag) {
    let completed=0;
    guessWord.map((item)=>item.isMatched==true?completed++:'')
    console.log(flag)
    console.log(findFlagForturns(flag));
if(completed!=guessWord.length+1){
  
   if(turns>0){
     if(findFlagForturns(flag)) {
      setTurns((pre)=>pre-1);
    
    }
   }
   else{
      alert("Game Over")
      setRandomItem(getRandomItem())
      setguessWord(transFormWord(randomItem.item))
      setTurns(6)
   }
}
else{
 
   setRandomItem(getRandomItem())
   setguessWord(transFormWord(randomItem.item))
      setTurns(6)
       alert("you won this game")
}
   
  }
  const dispatch=useDispatch();
  function handleInputs(char){
    dispatch(playerInput(char));
      
  }
  return (
    <div>
      <p>{randomItem.category}</p>
      <p>{randomItem.item}</p>
      <h1>Turns:{turns}</h1>
      <div className="flex w-20 gap-2">
        {guessWord.map((item, i) => (
          <div key={i}>
            <p>{item.isMatched ? item.char : " "}</p>
            <p className="w-5 h-1 border-b-2"></p>
          </div>
        ))}
      </div>
      <div className="flex w-[500px] mt-4">
        {englishAlphabet.map((item, i) => (
          <p
            key={i}
            value={item}
            onClick={() => {
              handleInputs(item);
            }}
            className="w-8 h-8 border-2 text-center"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default HangManGame;
