import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playerInput, selectAllState, selectgueesData,  } from '../Redux/HangmanSlice'
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
function MatchCharVeiw() {
  console.log(useSelector(selectAllState))
    const guessWord=useSelector(selectgueesData)
    const dispatch=useDispatch();
    function handleInputs(char){
      dispatch(playerInput(char));
        
    }
  return (
    <div>
    
    <div className='flex gap-2'>
    {guessWord.map((item, i) => (
        <div key={i}>
          <p>{item.isMatched ? item.char : " "}</p>
          <p className="w-5 h-1 border-b-2"></p>
        </div>
      ))}</div>
      <div className="flex w-[500px] mt-4">
      {englishAlphabet.map((item, i) => (
        <p
          key={i}
          value={item}
          onClick={() => 
            handleInputs(item)
          }
          className="w-8 h-8 border-2 text-center"
        >
          {item}
        </p>
      ))}
    </div>
    </div>
  )
}

export default MatchCharVeiw
