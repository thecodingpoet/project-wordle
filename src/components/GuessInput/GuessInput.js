import React from 'react'

function GuessInput({ onSubmit, onChange, guess, disabled }) {
  return (
    <form className='guess-input-wrapper' onSubmit={onSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={onChange}
        disabled={disabled}
        pattern='.{5}'
        title='Please enter exactly 5 characters'
        required
      />
    </form>
  )
}

export default GuessInput
