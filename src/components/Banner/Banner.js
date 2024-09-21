import React from 'react'

function HappyBanner({ attempts }) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {attempts} {attempts === 1 ? 'guess' : 'guesses'}.
        </strong>
      </p>
    </div>
  )
}

function SadBanner({ answer }) {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

function Banner({ type = 'happy', answer = '', attempts = 0, visible = false }) {
  if (!visible) return null

  const bannerTypes = {
    happy: HappyBanner,
    sad: SadBanner,
  }

  const BannerComponent = bannerTypes[type]
  return BannerComponent ? <BannerComponent answer={answer} attempts={attempts} /> : null
}

export default Banner
