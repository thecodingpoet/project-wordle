import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED, EMPTY_GUEST_CELLS } from '../../constants'
import { checkGuess } from '../../game-helpers'

function Guess({ guessHistory, answer }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guessHistory[index]
        const guessCells = guess ? guess.split('') : EMPTY_GUEST_CELLS

        const checkedGuess = checkGuess(guess, answer)

        return (
          <p key={index} className='guess'>
            {guessCells.map((cell, index) => {
              const { status } = checkedGuess?.[index] || {}
              return <span className={`cell ${status}`}>{cell}</span>
            })}
          </p>
        )
      })}
    </div>
  )
}

export default Guess
