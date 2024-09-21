import React from 'react'

function Banner({ type = 'happy', answer = '', attempts = 0, visible = false }) {
  if (!visible) return null

  switch (type) {
    case 'happy':
      return (
        <div class='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in <strong>{attempts} guesses</strong>.
          </p>
        </div>
      )
    case 'sad':
      return (
        <div class='sad banner'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )
  }
}

export default Banner
