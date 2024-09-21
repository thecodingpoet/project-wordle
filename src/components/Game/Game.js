import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput'
import Guess from '../Guess'
import Banner from '../Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessHistory, setGuessHistory] = useState([])
  const [guess, setGuess] = useState('')

  const currentGuess = guessHistory[guessHistory.length - 1]
  const correctAnswer = currentGuess === answer
  const showBanner = correctAnswer || guessHistory.length === NUM_OF_GUESSES_ALLOWED

  function handleGuessSubmit(event) {
    event.preventDefault()
    setGuess('')
    setGuessHistory((prevGuesses) => [...prevGuesses, guess])
  }

  function handleGuessChange(event) {
    setGuess(event.target.value.toUpperCase())
  }

  return (
    <>
      <Guess guessHistory={guessHistory} answer={answer} />
      <GuessInput
        onSubmit={handleGuessSubmit}
        onChange={handleGuessChange}
        guess={guess}
        disabled={guessHistory.length === NUM_OF_GUESSES_ALLOWED}
      />
      <Banner
        type={correctAnswer ? 'happy' : 'sad'}
        answer={answer}
        attempts={guessHistory.length}
        visible={showBanner}
      />
    </>
  )
}

export default Game
