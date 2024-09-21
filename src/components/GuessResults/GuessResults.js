import React from 'react'

import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'
import Guess from '../Guess'

function GuessResults({ guessHistory, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guessHistory[index]
        const checkedGuess = checkGuess(guess, answer)

        return <Guess key={index} guess={checkedGuess} />
      })}
    </div>
  )
}

export default GuessResults
