import React, { useState } from "react";
import {
  playerInput,
  resetState,
  selectAllState,
  selectCorrectGuessWordLength
} from "../Redux/HangmanSlice";
import { useDispatch, useSelector } from "react-redux";

 
function KeyChar({ char }) {
  const [isShow, setIsShow] = useState("");
  const dispatch = useDispatch();
  function handleInputs(char) {
    console.log(char);
    dispatch(playerInput({ char, setIsShow }));
  }
  console.log(isShow, char);

    const allState = useSelector(selectAllState);
    const guessWordLength = allState.randomHintWord.length;
    const correctWord = useSelector(selectCorrectGuessWordLength);
  
    if (guessWordLength === correctWord) {
        dispatch(resetState(setIsShow));
        window.location.reload();
      alert(`you won with score ${allState.score}`);
    }
    if (allState.maxAttepts == 0) {
      dispatch(resetState(setIsShow));
        alert("Game Over");
        window.location.reload()
    }
  return (
    <div
      onClick={() => handleInputs(char)}
      style={{
        border: "1px solid black",
        padding: "10px",
        cursor: isShow ? "not-allowed" : "pointer",
        backgroundColor:
          isShow === "green" ? "green" : isShow === "red" ? "red" : "",
        pointerEvents: isShow ? "none" : "auto",
      }}
    >
      {char}
    </div>
  );
}

export default KeyChar;
