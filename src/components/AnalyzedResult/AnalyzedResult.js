import React from 'react'

const AnalyzedResult = (props: {words: [], times: []}) => {

let finalResult = [];

const renderMoods = () => {
for (let i in props.words) {
finalResult.push(<div>{props.words[i]}<hr/>{props.times[i]}</div>)
}
return finalResult
}
  return <div id="showResult">{renderMoods()}</div>;
};

export default AnalyzedResult;
