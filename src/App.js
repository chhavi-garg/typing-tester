import React, { Component } from 'react';
import "./App.css";
import ChallengeSection from './Components/ChallengeSection';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import {SAMPLE_PARAGRAPHS} from './sampleParagraph';
const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/2/10";

const DefaultState =
{
    selectedParagraph : "",
    testInfo :[],
    words : 0,
    characters : 0,
    wpm : 0,
    timeRemaining : totalTime,
    timerStarted :  false,
}

export default class App extends Component {

  // state = {
  //   selectedParagraph : "",
  //   testInfo :[],
  //   words : 0,
  //   characters : 0,
  //   wpm : 0,
  //   timeRemaining : totalTime,
  //   timerStarted :  false,
  // };

  state = DefaultState;

  fetchNewParagraph = () =>{
    fetch(serviceUrl)
        .then((response) => response.text())
        .then((data) =>{
  
  
          console.log(data);
          // this.setState({selectedParagraph : data}); 
          const selectedParagraphArray = data.split("");
          // console.log('Splitted Array - ', selectedParagraphArray)
          const testInfo = selectedParagraphArray.map(
            (selectedLetter)=>{
            return {
              testLetter : selectedLetter,
              status: "notAttempted",
            };
          });
          this.setState({...DefaultState,testInfo : testInfo, selectedParagraph : data});
        });
  }

  componentDidMount()
  {
    this.fetchNewParagraph();
    // fetch(serviceUrl)
    //   .then((response) => response.text())
    //   .then((data) =>{


    //     console.log(data);
    //     // this.setState({selectedParagraph : data}); 
    //     const selectedParagraphArray = data.split("");
    //     // console.log('Splitted Array - ', selectedParagraphArray)
    //     const testInfo = selectedParagraphArray.map(
    //       (selectedLetter)=>{
    //       return {
    //         testLetter : selectedLetter,
    //         status: "notAttempted",
    //       };
    //     });
    //     this.setState({testInfo : testInfo, selectedParagraph : data});
    //   });
     
  }

  startTimer = () =>
  {
    this.setState({timerStarted : true});
    const timer = setInterval(()=>
    {
      if(this.state.timeRemaining >0)
      {
        //Change the Wpm
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm = 
          timeSpent >0 ? (this.state.words/timeSpent) * totalTime
          : 0;
        this.setState({
          timeRemaining : this.state.timeRemaining -1,
          wpm : parseInt(wpm),
        });
      }

      else{
        clearInterval(timer);
      }
    },1000);
  }; 

  // startAgain = () => alert("I am starting again !");
  startAgain = () => this.fetchNewParagraph();
  handleUserInput =(inputValue)=>
  {
    // console.log(inputValue);
    if(!this.state.timerStarted) this.startTimer();

    /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */
      
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;
    
    if(index<0)
    {
       this.setState({
        testInfo : [
          {
            testLetter : this.state.testInfo[0].testLetter,
            status : "notAttempted"
          },
          ...this.state.testInfo.slice(1),
        ],

        characters,
        words,
       });

       return;
    }

    if(index >= this.state.selectedParagraph.length)
    {
      this.setState({characters, words});
      return;
    }

    // Making a copy of test info

    const testInfo = this.state.testInfo;
    if(!index===this.state.selectedParagraph.length -1)
    {
      testInfo[index + 1].status = "notAttempted";
    }


    // For correctly typed letters

    const isCorrect = inputValue[index] ===testInfo[index].testLetter;

    // Updating the test Info

    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    // Update the set state

    this.setState
    ({
      testInfo, words, characters,
    })
  };

  render() {
    // fetch(serviceUrl).then(response => response.text().then(information =>
    //   {
    //     console.log("API RESPONSE IS !!", information);
    //   }));

    // console.log("Render method was called");
    // console.log("Test Info - ", this.state.testInfo);
    return (
      <div>
        <div className="app">
          {/* Nav Section */}
          <NavBar />

          {/* Landing Page */}
          <Landing />

          {/* Challenge Section */}
          <ChallengeSection 
              selectedParagraph = {this.state.selectedParagraph}
              words ={this.state.words}
              characters = {this.state.characters}
              wpm = {this.state.wpm}
              timeRemaining = {this.state.timeRemaining}
              timerStarted = {this.state.timerStarted}
              testInfo ={this.state.testInfo}
              onInputChange ={this.handleUserInput}
              startAgain = {this.startAgain}
          />

          {/* Footer */}
          <Footer />


        </div>
      </div>
    )
  }
}
