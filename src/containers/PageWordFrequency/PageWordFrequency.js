import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPb, setAnalyzedData} from './../../redux/modules/wordFrequency';
import tokenize from 'tibetan-tokenize';
import AnalyzedResult from './../../components/AnalyzedResult/AnalyzedResult';
import WordFrequencyForm from './../../components/WordFrequencyForm/WordFrequencyForm';
import getWordFrequencyData from './../../helpers/getWordFrequencyData';

function mapStateToProps({wordFrequency}) {
  return {
    analyzedData: wordFrequency.analyzedData
  };
}

class PageWordFrequency extends Component {

  static propTypes = {
    getPb: PropTypes.func.isRequired,
    setAnalyzedData: PropTypes.func.isRequired,
    analyzedData: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this.state = {
      analyzedData: {}
    };
  };

  handleSearch = ({kdbName, pbId}) => {

    const {getPb, setAnalyzedData} = this.props;

    getPb({kdbName, pbId})
      .then(({text}) => {
        const {tokens} = tokenize(text);
        const analyzedData = getWordFrequencyData(tokens);
        setAnalyzedData(analyzedData);
      })
      .catch((errResponse) => {
        console.error('errResponse', errResponse);
      });
  };

  render() {
    const {analyzedData} = this.props;
    return (
      <div id="pageWordFrequency">
        <h1>字頻列表</h1>
        <WordFrequencyForm  onSubmit={this.handleSearch} />
        <AnalyzedResult analyzedData={analyzedData} />
      </div>
    );
  }
}

export default connect(mapStateToProps, {getPb, setAnalyzedData})(PageWordFrequency);
