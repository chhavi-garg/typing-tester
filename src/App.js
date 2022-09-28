import React, { Component } from 'react';
import "./App.css";
import ChallengeSection from './Components/ChallengeSection';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';

const totalTime = 8;
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

      this.setState({testInfo : testInfo})
  }
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
          />

          {/* Footer */}
          <Footer />


        </div>
      </div>
    )
  }
}
