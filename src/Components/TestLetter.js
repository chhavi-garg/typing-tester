import React from 'react'

export default function TestLetter({individualLetterInfo}) {
    const {status} = individualLetterInfo
    // let statusClass;

    const statusClass=
    {
        correct : "test-letter-correct",
        incorrect : "test-letter-incorrect",
        notAttempted : "test-letter-not-attempted"
    }[status]
    // if(status=== "correct")
    // {
    //     statusClass= "test-letter-correct";
    // }

    // else if(status==="incorrect")
    // {
    //     statusClass= "test-letter-incorrect";
    // }
    // else{
    //     statusClass= "test-letter-not-attempted";
    // }
    return (
<span className={`test-letter ${statusClass}`}>
        {individualLetterInfo.testLetter}
    </span>
  )
}
