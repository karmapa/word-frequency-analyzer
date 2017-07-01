import React, {Component} from 'react';
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'
import './App.css';
import PageWordFrequency from './../PageWordFrequency/PageWordFrequency';
import About from './../About/About'

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/wordFrequency'>Word Frequency</Link></li>
            </ul>
            <hr/>
            <Route exact path='/' component={PageWordFrequency} />
            <Route path='/about' component={About} />
            <Route path='/wordFrequency' component={PageWordFrequency} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
