import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED, EMPTY_GUEST_CELLS } from '../../constants'

function Guess({ guessHistory }) {
  return (
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const guess = guessHistory[index]
        const guessCells = guess ? guess.split('') : EMPTY_GUEST_CELLS

        return (
          <p key={index} className='guess'>
            {guessCells.map((cell) => (
              <span className='cell'>{cell}</span>
            ))}
          </p>
        )
      })}
    </div>
  )
}

export default Guess
