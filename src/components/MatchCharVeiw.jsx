import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  playerInput,
  selectAllState,
  selectgueesData,
} from "../Redux/HangmanSlice";
import KeyChar from "./KeyChar";

const QWITRY_ALPHABETS = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",

  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

function MatchCharVeiw() {
  console.log(useSelector(selectAllState));
  const allState = useSelector(selectAllState) || [];
  const guessWord = useSelector(selectgueesData);
  return (
    
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 min-h-screen">
      <div className="flex gap-2">
        {guessWord.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <p
              className={`text-lg font-bold ${
                item.isMatched ? "text-black" : "text-transparent"
              }`}
            >
              {item.isMatched ? item.char : " "}
            </p>
            <p className="w-5 h-1 border-b-2 border-gray-400"></p>
          </div>
        ))}
      </div>
      <div className="flex w-[500px] mt-4 gap-4 flex-wrap justify-center">
        {QWITRY_ALPHABETS.map((item, i) => (
          <KeyChar
            char={item}
            key={i}
            className="text-center bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2 shadow"
          />
        ))}
      </div>
    </div>
  );
}

export default MatchCharVeiw;
