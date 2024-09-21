import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED, LENGTH_OF_GUESS } from '../../constants'
import { checkGuess } from '../../game-helpers'

function Guess({ guessHistory, answer }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guessHistory[index]
        const checkedGuess = checkGuess(guess, answer)

        return (
          <p key={index} className='guess'>
            {range(0, LENGTH_OF_GUESS).map((index) =>
              checkedGuess ? (
                <span className={`cell ${checkedGuess[index].status}`}>{checkedGuess[index].letter}</span>
              ) : (
                <span className='cell'></span>
              )
            )}
          </p>
        )
      })}
    </div>
  )
}

export default Guess
