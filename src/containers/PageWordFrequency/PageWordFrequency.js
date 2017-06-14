import React, {Component} from 'react';
import tokenize from 'tibetan-tokenize';
import AnalyzedResult from './../../components/AnalyzedResult/AnalyzedResult';
import WordFrequencyForm from './../../components/WordFrequencyForm/WordFrequencyForm';
import getWordFrequencyData from './../../helpers/getWordFrequencyData';

const getApiUrl = ({kdbName, pbId}) => `https://api.dharma-treasure.org/kdbs/${kdbName}/pbs/${pbId}`;

class PageWordFrequency extends Component {

  constructor(props) {
    super(props)
    this.state = {
      analyzedData: {}
    };
  };

  handleSearch = ({kdbName, pbId}) => {

    const apiUrl = getApiUrl({kdbName, pbId});

    fetch(apiUrl).then(function(response) {

      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);

    }).then(({text}) => {

      const {tokens} = tokenize(text);
      const analyzedData = getWordFrequencyData(tokens);
      this.setState({analyzedData});
    })
    .catch((errResponse) => {
      console.error('errResponse', errResponse);
    });
  }

  render() {
    const {analyzedData} = this.state;
    return (
      <div className="App">
        <h1>字頻列表</h1>
        <WordFrequencyForm  onSubmit={this.handleSearch} />
        <AnalyzedResult analyzedData={analyzedData} />
      </div>
    );
  }
}

export default PageWordFrequency;
