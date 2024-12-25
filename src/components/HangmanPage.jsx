import React from 'react'
import MatchCharVeiw from './MatchCharVeiw'
import { useSelector } from 'react-redux'
import { selectAllState } from '../Redux/HangmanSlice'

function HangmanPage() {
    const allState=useSelector(selectAllState)
  return (
    <div>
    <h1>Hint:-{allState.randomCategory}</h1>
    <h1>Guess Word:{allState.randomHintWord}</h1>
    <h1>Maximum Attempt: {allState.maxAttepts}</h1>
    <h1>Score : {allState.score}</h1>
      <MatchCharVeiw/>
    </div>
  )
}

export default HangmanPage
