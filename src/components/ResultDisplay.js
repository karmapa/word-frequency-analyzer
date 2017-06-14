import React, {Component} from 'react'

//class  extends Component{

  const ResultDisplay =(props:{words:[],times:[]})=> {


//  console.log('Test'+props.words)

let finalResult='';

for (let i in props.words){

finalResult+=`<div class="resultBlock">${props.words[i]}<hr>${props.times[i]}</div>`

}

//this.refs.testIt.innerHTML=finalResult

  return (
    <div>

      <div>HELLO</div>
      <hr/>
      <div>{finalResult}</div>
    </div>
  )

};


export default ResultDisplay;
