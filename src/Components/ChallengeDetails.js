import React from 'react'

export default function ChallengeDetails({cardName, cardValue}) {
  return (
    <div className="details-card-container">
      <div className="card-name">{cardName}</div>
      <div className="card-value">{cardValue}</div>
    </div>
  )
}
