import React from 'react'
import TestContainer from './TestContainer'

export default function ChallengeSection({selectedParagraph, words,characters,wpm,timeRemaining,timerStarted,testInfo}) {
  return (
    <div className="challenge-section-container">
        <h1 data-aos="fade-down" className="challenge-section-header">
            Take a speed test now!
        </h1>
        <TestContainer 
          words={words} 
          characters={characters} 
          wpm={wpm} 
          timeRemaining={timeRemaining} 
          timerStarted={timerStarted}
          selectedParagraph = {selectedParagraph}
          testInfo={testInfo} />
    </div>
  )
}
