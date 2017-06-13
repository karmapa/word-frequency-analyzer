import React, { Component } from 'react';
import tokenize from 'tibetan-tokenize'
import SidePanel from './showResult'

const PbInfo = (props : {
  apiHREF: string
}) => {

  let apiText = ''

  fetch(props.apiHREF).then(function(response) {
    if (response.ok === false) {
    //  document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    //this.refs.showResult.innerHTML='CCC'
    }

    return response.json();

  }).then(function(jsonObject) {

    apiText = (jsonObject.text)

    const tokenTokens = (tokenize(apiText)).tokens
    const tokenOffsets = (tokenize(apiText)).offsets

    arrangeResult(tokenTokens, tokenOffsets)

  });

  const arrangeResult = (tokenTokens, tokenOffsets) => {
    let pageList = ''

    for (let i in tokenTokens) {
      pageList = pageList + '<div class=' + '"' + 'resultBlock' + '">' + tokenTokens[i] + '<hr>' + tokenOffsets[i] + '</div>'

    }
    if (pageList==='') {
    //  document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    //this.refs.showResult.innerHTML='BBB'
    }else{
    //document.getElementById('showResult').innerHTML = pageList
    //this.refs.showResult.innerHTML='AAA'
}



  }

console.log(tokenize('\n༼ཀ༽ ༄༅། ༈ །འདུལ་བ་ལུང་བཞུགས་སོ། །\n(黃)  律師戒行經第一部\n'))

console.log(tokenize('རྒྱལ་བའི་དབང་པོ་ཆོས་ཀྱི་གྲུ་བརྙེས་འདམ་ལས་བརྒལ།'))


  return null


}



export default PbInfo;
