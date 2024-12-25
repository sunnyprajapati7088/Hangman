import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HangManGame from './components/HangManGame'
import { useSelector } from 'react-redux'
import { selectgueesData } from './Redux/HangmanSlice'
import HangmanPage from './components/HangmanPage'
function App() {
  console.log(useSelector(selectgueesData))
  return (
    <div>
      <HangmanPage/>
    </div>
  );
}

export default App
