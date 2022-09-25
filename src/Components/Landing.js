import React from 'react'
import flash from '../assets/flash.png'
import Typewriter from "typewriter-effect";

export default function Landing() {
  return (
    <div className="landing-container">
        <div className="landing-left" data-aos="fade-right">
            <h1 className="landing-header">
                Can you type ..
            </h1>
            <div className="typewriter-container">
                <Typewriter
                    options={{
                        strings: ["Fast?", "Correct?", "Quick?"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>

        <div className="landing-right">
        <img data-aos="fade-left" className="flash-image" src={flash} alt="flash" />
        </div>
    </div>
  )
}