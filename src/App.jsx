import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useDispatch, useSelector } from 'react-redux'
import { resetState, selectAllState, selectCorrectGuessWordLength, selectgueesData } from './Redux/HangmanSlice'
import HangmanPage from './components/HangmanPage'
function App() {
  console.log(useSelector(selectAllState))
 

    return (
      <div>
        <HangmanPage />
      </div>
    );
}

export default App
