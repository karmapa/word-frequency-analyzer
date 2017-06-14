import React, {Component} from 'react';
import tokenize from 'tibetan-tokenize';
import AnalyzedResult from './../../components/AnalyzedResult/AnalyzedResult';

class PageWordFrequency extends Component {

  constructor(props) {
    super(props)
    this.state = {
      kdbName: '',
      pbId: '',
      analyzedData: {}
    };
  };

  handleSearch = () => {

    const apiUrl = `https://api.dharma-treasure.org/kdbs/${this.state.kdbName}/pbs/${this.state.pbId}`

    fetch(apiUrl).then(function(response) {

      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);

    }).then(function({text}) {

      const {tokens} = tokenize(text);

      let theResult = {
        wordArr: [],
        frequencyArr: []
      };

      for (let i in tokenTokens) {

        if (theResult.wordArr.length === 0) {
          theResult.wordArr[i] = tokenTokens[i];
          theResult.frequencyArr[i] = 1;
        } else {
          let isReapeat = true;
          for (let x in theResult.wordArr) {

            if (theResult.wordArr[x] === tokenTokens[i]) {
              theResult.frequencyArr[x] += 1;

              isReapeat = !isReapeat
            }
          }

          if (isReapeat) {

            theResult.wordArr.push(tokenTokens[i])
            theResult.frequencyArr.push(1)

          }

        }
      };
return theResult
    }).then((theResult)=>{
      this.setState({
        finalWord: theResult.wordArr,
        finalFrequency: theResult.frequencyArr,
      })
      //    console.log('TEST'+this.state.finalWord)
    })
    .catch((errResponse) => {
      console.error('errResponse', errResponse);
    });


  }

  handleKDBChange = (e) => {
    this.setState({kdbName: e.target.value})
  }

  handlePBChange = (e) => {
    this.setState({pbId: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>字頻列表</h1>

        <lable>
          KDB名稱：<input onChange={this.handleKDBChange}/>
        </lable>
        <label>
          PB ID：
          <input onChange={this.handlePBChange}/>
        </label>

        <button onClick={this.handleSearch}>Search</button>

        <AnalyzedResult words={this.state.finalWord} times={this.state.finalFrequency}/>

      </div>
    );
  }
}

export default PageWordFrequency;
