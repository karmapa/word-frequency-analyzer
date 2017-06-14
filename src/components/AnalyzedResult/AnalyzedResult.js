import React from 'react'

const AnalyzedResult = ({words = [], times = []}) => {

  const resultRows = words.map((word, index) => (<div key={`result-row-${index}`}>{word}<hr />{times[index]}</div>));

  return <div id="showResult">{resultRows}</div>;
};

export default AnalyzedResult;
