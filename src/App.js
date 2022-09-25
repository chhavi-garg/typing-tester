import React, { Component } from 'react';
import "./App.css";
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="app">
          {/* Nav Section */}
          <NavBar />

          {/* Landing Page */}
          <Landing />
          
          {/* Challenge Section */}

          {/* Footer */}


        </div>
      </div>
    )
  }
}
