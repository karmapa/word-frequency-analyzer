import React from 'react'

const AnalyzedResult = ({words = [], times = []}) => {

  let finalResult = [];

  const renderMoods = () => {
    for (let i in words) {
      finalResult.push(<div>{words[i]}<hr/>{times[i]}</div>)
    }
    return finalResult
  }
  return <div id="showResult">{renderMoods()}</div>;
};

export default AnalyzedResult;
