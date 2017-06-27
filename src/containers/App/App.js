import React, { Component } from 'react';
import './App.css';
import PageWordFrequency from './../PageWordFrequency/PageWordFrequency';
import PropTypes from 'prop-types'

class App extends Component {

  render(){

const { analyzedData,store } = this.props
  console.log( analyzedData )
    return (
      <div className="App">
        <PageWordFrequency
        analyzedData={ analyzedData }
        analyzedResult={ this.analyzedResult }
        store={store}
      />
      </div>
     );
   }
 }

PageWordFrequency.propTypes = {
  App: PropTypes.any,
  store:PropTypes.any
 }

export default App;
