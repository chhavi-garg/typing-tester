import React, { Component } from 'react';
import "./App.css";
import ChallengeSection from './Components/ChallengeSection';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/2/10";
export default class App extends Component {

  state = {
    selectedParagraph : "Hello World Hello World Hello World Hello World My name is Chhavi!!",
    testInfo :[],
    words : 0,
    characters : 0,
    wpm : 0,
    timeRemaining : totalTime,
    timerStarted :  false,
  };


  componentDidMount()
  {
    // fetch(serviceUrl)
    //   .then(response => response.text())
    //   .then(data =>{
    //     // console.log(data);
    //     this.setState({selectedParagraph : data}); 
    //   });

      // this.setState({timeRemaining : 30})

      const selectedParagraphArray = this.state.selectedParagraph.split("");
      // console.log('Splitted Array - ', selectedParagraphArray)
      const testInfo = selectedParagraphArray.map((selectedLetter)=>{
        return {
          testLetter : selectedLetter,
          status: "notAttempted",
        };
      });

      this.setState({testInfo: testInfo});
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
          />

          {/* Footer */}
          <Footer />


        </div>
      </div>
    )
  }
}
