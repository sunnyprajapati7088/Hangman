import React, { useState } from "react";
import {
  playerInput,
  selectAllState,
  selectCorrectGuessWordLength,
} from "../Redux/HangmanSlice";
import { useDispatch, useSelector } from "react-redux";

function KeyChar({ char }) {
  const [isShow, setIsShow] = useState("");
  const dispatch = useDispatch();
  function handleInputs(char) {
    console.log(char);
    dispatch(playerInput({ char, setIsShow }));
  }
  return (
    <div onClick={() => handleInputs(char)} style={{ border: {} }}>
      {char}
    </div>
  );
}

export default KeyChar;
