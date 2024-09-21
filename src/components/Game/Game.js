import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import Guess from '../Guess'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessHistory, setGuessHistory] = useState([])

  return (
    <>
      <Guess guessHistory={guessHistory} />
      <GuessInput setGuessHistory={setGuessHistory} />
    </>
  )
}

export default Game
