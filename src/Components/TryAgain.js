import React from 'react'

export default function TryAgain({words,characters,wpm}) {
  return (
    <div data-aos="fade-up" className="try-again-container">
        <h1>Test Results</h1>

        <div className="results-container">
            <p>
                <b>Characters : </b> {characters}
            </p>
            <p>
                <b>Words : </b> {words}
            </p>
            <p>
                <b>Speed : </b> {wpm} wpm
            </p>
        </div>
        <div>
                <button className="end-buttons start-again-btn">
                        Re-try
                </button>

                <button className="end-buttons share-btn" onClick={() =>
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=",
                            "facebook-share-dialog",
                            "width=800,height=600")}>
                    Share
                </button> 

                <button className="end-buttons tweet-btn"
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=Check%20this%20out%20",
                            "Twitter",
                            "width=800,height=600")}>
                    Tweet
                </button>
            </div>
    </div>
  )
}
