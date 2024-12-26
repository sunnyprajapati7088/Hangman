import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playerInput, selectAllState, selectgueesData,  } from '../Redux/HangmanSlice'
import KeyChar from './KeyChar';
  const ALPHABETS = [
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
function MatchCharVeiw() {
  console.log(useSelector(selectAllState))
    const allState=useSelector(selectAllState)||[]
    const guessWord=useSelector(selectgueesData)
  return (
    <div>
      <div className="flex gap-2">
        {guessWord.map((item, i) => (
          <div key={i}>
            <p>{item.isMatched ? item.char : " "}</p>
            <p className="w-5 h-1 border-b-2"></p>
          </div>
        ))}
      </div>
      <div className="flex w-[500px] mt-4 gap-4">
        {ALPHABETS.map((item, i) => (
          <KeyChar char={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default MatchCharVeiw
