import React, {Component} from 'react';

const PbInfo = (props : {apiHREF: string}) => {

  var apiText = ''

  fetch(props.apiHREF).then(function(response) {
    /*if (response.ok) {
        return response.json();
    } else {
        console.log("response is not succeed")
        document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
        return response.json();
    }*/
    if (response.ok==false){
      document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    }
    return response.json();

  }).then(function(jsonObject) {

    apiText = (jsonObject.text)

    var tokenize = require('tibetan-tokenize')
    var tokenTokens = (tokenize(apiText)).tokens
    var tokenOffsets = (tokenize(apiText)).offsets
console.log('TESTT'+tokenTokens)

    arrangeResult(tokenTokens, tokenOffsets)


  });

  const arrangeResult = (tokenTokens, tokenOffsets) => {
    var pageList = ''

    for (var i in tokenTokens) {
      pageList = pageList + '<div class=' + '"' + 'resultBlock' + '">' + tokenTokens[i] + '<hr/>' + tokenOffsets[i] + '</div>'

    }

    document.getElementById('showResult').innerHTML = pageList

  }

return null

}

export default PbInfo;
