import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Match, Miss} from 'react-router'
import './App.css';
import PageWordFrequency from './../PageWordFrequency/PageWordFrequency';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PageWordFrequency />
      </div>
    );
  }
}

export default App;
