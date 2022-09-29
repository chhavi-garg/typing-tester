import React from 'react'
import ChallengeDetails from './ChallengeDetails'
import TypingChallenge from './TypingChallenge'

export default function TypingChallengeContainer({selectedParagraph, words,characters,wpm,timeRemaining,timerStarted,testInfo,onInputChange}) {
  return (
   <div className="typing-challenge-container">
        {/* Details */}
        <div className="details-container">

            {/* Words Typed */}
            <ChallengeDetails cardName="Words" cardValue={words}/>

            {/* Characters Typed */}
            <ChallengeDetails cardName="Characters" cardValue={characters}/>

            {/* Speed */}
            <ChallengeDetails cardName="Speed" cardValue={wpm}/>

        </div>
        {/* The REAL Challenge */}
        <div className="typewriter-container">
          <TypingChallenge 
            timerStarted ={timerStarted}
            timeRemaining={timeRemaining}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            onInputChange={onInputChange} />

        </div>
   </div>
  )
}
