import React from 'react'

const AnalyzedResult = ({analyzedData = {}}) => {

  const resultRows = Object.keys(analyzedData)
    .map((word, index) => (<div key={`result-row-${index}`}>{word}<hr />{analyzedData[word]}</div>));

  return <div id="showResult">{resultRows}</div>;
};

export default AnalyzedResult;
