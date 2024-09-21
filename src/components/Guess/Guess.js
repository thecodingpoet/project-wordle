import React from 'react'
import { range } from '../../utils'
import { LENGTH_OF_GUESS } from '../../constants'

function Cell({ status, letter }) {
  return <span className={`cell ${status ? status : ''}`}>{letter}</span>
}

function Guess({ guess }) {
  return (
    <p className='guess'>
      {range(LENGTH_OF_GUESS).map((index) => (
        <Cell key={index} status={guess?.[index].status} letter={guess?.[index].letter} />
      ))}
    </p>
  )
}

export default Guess
