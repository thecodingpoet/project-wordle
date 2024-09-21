import React, { useState } from 'react'

function GuessInput({ setGuessHistory }) {
  const [guess, setGuess] = useState('')

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    setGuess('')
    setGuessHistory((prevGuesses) => [...prevGuesses, guess])
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={handleChange}
        pattern='.{5}'
        title='Please enter exactly 5 characters'
        required
      />
    </form>
  )
}

export default GuessInput
