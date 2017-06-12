
const PbInfo = (props : {
  apiHREF: string
}) => {

  let apiText = ''

  fetch(props.apiHREF).then(function(response) {
    if (response.ok === false) {
      document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    }
    return response.json();

  }).then(function(jsonObject) {

    apiText = (jsonObject.text)

    const tokenize = require('tibetan-tokenize')
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
      document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    }else{
    document.getElementById('showResult').innerHTML = pageList
}

  }

  return null

}

export default PbInfo;
