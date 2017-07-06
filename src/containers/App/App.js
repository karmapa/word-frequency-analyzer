import React, {Component} from 'react';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'
import './App.css';
import PageWordFrequency from './../PageWordFrequency/PageWordFrequency';
import About from './../About/About'

class App extends Component {

  render() {
    return (
      <Router>
        <div id='App'>
          <nav>
            <li><Link to='/'>Word Frequency</Link></li>
            <li><Link to='/about'>About</Link></li>
          </nav>
          <div id='content'>
            <Route exact path='/' component={PageWordFrequency} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
