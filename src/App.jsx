import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HangManGame from './components/HangManGame'
import { useDispatch, useSelector } from 'react-redux'
import { resetState, selectAllState, selectCorrectGuessWordLength, selectgueesData } from './Redux/HangmanSlice'
import HangmanPage from './components/HangmanPage'
function App() {
  console.log(useSelector(selectgueesData))
  const allState= useSelector(selectAllState)
  const guessWordLength =allState.randomHintWord.length;
  const correctWord = useSelector(selectCorrectGuessWordLength)
  const dispatch = useDispatch();
    if (guessWordLength === correctWord) {
      dispatch(resetState());
      alert(`you won with score ${allState.score}`);
    }
  if (allState.maxAttepts == 0) {
    dispatch(resetState());
    alert("Game Over");
  }

    return (
      <div>
        <HangmanPage />
      </div>
    );
}

export default App
