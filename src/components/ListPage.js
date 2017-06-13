import React, {Component} from 'react';
import tokenize from 'tibetan-tokenize';
/*import PbInfo from './PbInfo';*/

/*  function status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.statusText))
        }
      }

      function json(response) {
        console.log('json-resone'+response.json());
        return response.json()
      }

      fetch('https://api.dharma-treasure.org/kdbs/jiangkangyur/pbs/1-1-3b')
        .then(status)
        .then(json)
        .then(function(data) {
          console.log('Request succeeded with JSON response', data);
        }).catch(function(error) {
          console.log('Request failed', error);
        });*/

fetch('https://api.dharma-treasure.org/kdbs/jiangkangyur/pbs/1-1-1b').then(function(response) {
  if (response.ok === false) {
    console.log('apiHREF' + this.apiHREF)
    console.log('response' + response)
  }

  return response.json();

}).then(function(jsonObject) {

  const apiText = (jsonObject.text);

  const tokenTokens = (tokenize(apiText)).tokens;
  //console.log(tokenTokens);

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
        console.log('WordArr' + theResult.wordArr[x] + x)
        console.log('Token' + tokenTokens[i] + i)

        if (theResult.wordArr[x] === tokenTokens[i]) {
          theResult.frequencyArr[x] += 1;

          isReapeat = !isReapeat
        }
      }

      if (isReapeat) {

        theResult.wordArr.push(tokenTokens[i])
        theResult.frequencyArr.push(1)
        console.log('pushafter' + theResult.wordArr)
        console.log('pushafeterfre' + theResult.frequencyArr)
        //    theResult.frequencyArr.push(1)

      }

    }
  };

});

class ListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      wordResult: [],
      apiText: '',
      apiHREF: 'https://api.dharma-treasure.org/kdbs/jiangkangyur/pbs/1-1-3b'
    }
  };

  handleSearch = () => {
    const newHREF = 'https://api.dharma-treasure.org/kdbs/jiangkangyur/pbs/1-1-3b';
    this.setState({apiHREF: newHREF})
    /*上面之後記得用裡面可以夾帶金錢符號的那個*/

  }

  render() {
    return (
      <div className="App">
        <lable>
          <h1>字頻列表</h1>
          KDB名稱：<input ref="inputKDBS"/></lable>
        <label>PB ID：
          <input ref="inputPBS"/></label>
        <button onClick={this.handleSearch}>Search</button>
        <div ref="theResult"></div>

      </div>
    );
  }
}

export default ListPage;
