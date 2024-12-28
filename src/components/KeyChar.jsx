import React, { useState } from "react";
import {
  playerInput,
  resetState,
  selectAllState,
  selectCorrectGuessWordLength,
} from "../Redux/HangmanSlice";
import { useDispatch, useSelector } from "react-redux";

const findChar = (array, charToFind) => {
  return array.find((item) => item.char === charToFind);
};

function KeyChar({ char }) {
  const dispatch = useDispatch();
  const allState = useSelector(selectAllState);
  const guessWordLength = allState.randomHintWord.length;
  const correctWordLength = useSelector(selectCorrectGuessWordLength);

  const guessCharStatus = findChar(allState.wrongRight, char) || {
    char: "",
    isMatched: "",
  };

  function handleInputs(char) {
    dispatch(playerInput({ char }));
  }
  if (guessWordLength === correctWordLength) {
    dispatch(resetState());
    alert(`you won with score ${allState.score}`);
  }
  if (allState.maxAttepts == 0) {
    dispatch(resetState());
    alert("Game Over");
  }
  return (
    <div
      onClick={() => handleInputs(char)}
      style={{
        border: "1px solid black",
        padding: "10px",
        cursor: guessCharStatus.char ? "not-allowed" : "pointer",
        backgroundColor:
          guessCharStatus.isMatched === true
            ? "green"
            : guessCharStatus.isMatched === false
            ? "red"
            : "",
        pointerEvents: guessCharStatus.char ? "none" : "auto",
      }}
    >
      {char}
    </div>
  );
}

export default KeyChar;
