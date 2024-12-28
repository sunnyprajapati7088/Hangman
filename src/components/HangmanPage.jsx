import React from 'react'
import MatchCharVeiw from './MatchCharVeiw'
import { useSelector } from 'react-redux'
import { selectAllState } from '../Redux/HangmanSlice'

function HangmanPage() {
    const allState=useSelector(selectAllState)
  return (
   
    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        Hint: <span className="text-blue-600">{allState.randomCategory}</span>
      </h1>
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        Guess Word:{" "}
        <span className="text-green-600">{allState.randomHintWord}</span>
      </h1>
      <h1 className="text-lg text-gray-700 mb-2">
        Maximum Attempts:{" "}
        <span className="text-red-600">{allState.maxAttepts}</span>
      </h1>
      <h1 className="text-lg text-gray-700 mb-4">
        Score: <span className="text-yellow-500">{allState.score}</span>
      </h1>
      <div className="w-full">
        <MatchCharVeiw />
      </div>
    </div>
  );
}

export default HangmanPage
