import React from 'react'

export default function TypingChallenge({words,characters,wpm}) {
  return (
   <div className="typing-challenge-cont">
        {/* Details */}
        <div className="details-container">
            {/* Words Typed */}
            <p> 1 </p>
            {/* Characters Typed */}
            <p> 2 </p>

            {/* Speed */}
            <p> 3 </p>

        </div>
        {/* The REAL Challenge */}
        <div className="typewriter-container">
        <p>This is the REAL CHALLENGE !</p>

        </div>
   </div>
  )
}
