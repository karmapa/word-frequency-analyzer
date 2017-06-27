import React, { Component } from 'react';
import tokenize from 'tibetan-tokenize';
import AnalyzedResult from './../../components/AnalyzedResult/AnalyzedResult';
import WordFrequencyForm from './../../components/WordFrequencyForm/WordFrequencyForm';
import getWordFrequencyData from './../../helpers/getWordFrequencyData';
import AnalyzedData from './../../reducers/AnalyzedData'
import PropTypes from 'prop-types'

//const getApiUrl = ({ kdbName, pbId }) => `https://api.dharma-treasure.org/kdbs/${ kdbName }/pbs/${ pbId }`;
const getApiUrl = ({ kdbName, pbId }) => 'https://api.dharma-treasure.org/kdbs/jiangkangyur/pbs/1-1-3b';

class PageWordFrequency extends Component {

  handleSearch = ({ kdbName, pbId }) => {

    const apiUrl = getApiUrl({ kdbName, pbId });

    fetch(apiUrl).then(function(response) {

      if (response.ok) {
        return response.json();
       }
      return Promise.reject(response);

     }).then(({ text }) => {

      const { tokens } = tokenize(text);
      var analyzedResult = getWordFrequencyData(tokens);
      this.props.store.dispatch({type:'ADD_TEXT',state:analyzedResult})
     })
    .catch((errResponse) => {
      console.error('errResponse', errResponse);
     });
   }

  render() {
    const {  analyzedData,store } = this.props
    console.log(store)

    return (
      <div id="pageWordFrequency">
        <h1>字頻列表</h1>
        <WordFrequencyForm onSubmit={ this.handleSearch } />
        <AnalyzedResult analyzedData={ analyzedData } />
      </div>
    );
   }
 }

PageWordFrequency.propTypes = {
  analyzedData: PropTypes.any,
  store:PropTypes.any,
 }

export default PageWordFrequency;
