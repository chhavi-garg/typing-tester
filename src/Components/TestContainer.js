import React from 'react'
import TryAgain from './TryAgain'
import TypingChallenge from './TypingChallenge'

export default function TestContainer({words,characters,wpm}) {
  return (
    <div className="test-container">
    <div data-aos="fade-up" className="typing-challenge-cont">
      <TypingChallenge 
          words={words} 
          characters={characters} 
          wpm={wpm}/>
    </div>
      {/* <TryAgain /> */}
        {/* <div className="try-again-container">
            <TryAgain words={words} characters={characters} wpm={wpm}/>
        </div> */}
    </div>
  )
}
