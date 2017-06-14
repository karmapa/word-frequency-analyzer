import React, {Component} from 'react'

//class  extends Component{

  const ResultDisplay =(props:{words:[],times:[]})=> {


  console.log('HEY-YOU'+props.finalWord)




/*  const separate=(tokenTokens)=>{

    let singleWord = []
    let caculateTimes = []

    for (let i in tokenTokens) {

    }
    if (pageList==='') {
    document.getElementById('showResult').innerHTML = '請輸入正確的名稱以及ID'
    //this.ref.theResult.innerHTML="AAA"
    }else{
    document.getElementById('showResult').innerHTML = pageList
  //  this.ref.theResult.innerHTML="AAA"
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

}*/



  return (
    <div>

      <div>HELLO</div>
      <div>{props.finalWord}</div>
    </div>
  )};


export default ResultDisplay;
