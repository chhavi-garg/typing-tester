import React from 'react'
import TryAgain from './TryAgain'

export default function TestContainer({words,characters,wpm}) {
  return (
    <div className="test-container">
        <div className="try-again-container">
            <TryAgain words={words} characters={characters} wpm={wpm}/>
        </div>
    </div>
  )
}
