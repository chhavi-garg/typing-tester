import React from 'react'
import TryAgain from './TryAgain'
import TypingChallengeContainer from './TypingChallengeContainer'

export default function TestContainer({selectedParagraph, words,characters,wpm,timeRemaining,timerStarted,testInfo}) 
{
  return (

    <div className="test-container">
            {/* Show the try again or start screen */}
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className="typing-challenge-cont">
                    <TypingChallengeContainer
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        selectedParagraph={selectedParagraph}
                        testInfo ={testInfo}
                    />
                </div>
            ) : (
                <div className="try-again-cont">
                    <TryAgain
                        words={words}
                        characters={characters}
                        wpm={wpm}
                    />
                </div>
            )}
        </div>
  )
}
