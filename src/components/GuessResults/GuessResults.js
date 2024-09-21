import React from 'react'

function GuessResults({ guessHistory }) {
  return (
    <div className='guess-results'>
      {guessHistory.map((guess) => (
        <p key={guess.id} class='guess'>
          {guess.value}
        </p>
      ))}
    </div>
  )
}

export default GuessResults
