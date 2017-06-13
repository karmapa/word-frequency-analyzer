import React, { Component } from 'react';
import tokenize from 'tibetan-tokenize'
import SidePanel from './showResult'

const PbInfo = (props : {
  apiHREF: string
}) => {

  let apiText = ''
  //let theResult=this.refs.theResult;

  fetch(props.apiHREF).then(function(response) {
    if (response.ok === false) {
  //  document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'

    }

    return response.json();

  }).then(function(jsonObject) {

    apiText = (jsonObject.text)

    const tokenTokens = (tokenize(apiText)).tokens
    const tokenOffsets = (tokenize(apiText)).offsets
    separate(tokenTokens)
    arrangeResult(tokenTokens, tokenOffsets)

  });

  const separate=(tokenTokens)=>{

    let singleWord = []
    let caculateTimes = []

    for (let i in tokenTokens) {

    }
    if (pageList==='') {
  //  document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    this.ref.theResult.innerHTML="AAA"
    }else{
  //  document.getElementById('showResult').innerHTML = pageList
    this.ref.theResult.innerHTML="AAA"
  }



  }

  const arrangeResult = (tokenTokens, tokenOffsets) => {
    let pageList = ''

    for (let i in tokenTokens) {
      pageList = pageList + '<div class=' + '"' + 'resultBlock' + '">' + tokenTokens[i] + '<hr>' + tokenOffsets[i] + '</div>'

    }
    if (pageList==='') {
  //  document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    this.ref.theResult.innerHTML="AAA"
    }else{
  //  document.getElementById('showResult').innerHTML = pageList
    this.ref.theResult.innerHTML="AAA"
  }




  }


  return null

}

export default PbInfo;
