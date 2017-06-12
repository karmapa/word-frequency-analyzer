import React, {Component} from 'react';
import PbInfo from './PbInfo';

class ListPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      apiHREF: []
    }
  }

  handleSearch = () => {
    const newHREF = ['https://api.dharma-treasure.org/kdbs/' + [document.getElementById('inputKDBS').value] + '/pbs/' + [document.getElementById('inputPBS').value]]
    this.setState({apiHREF: newHREF})
  }

  render() {
    return (
      <div className="App">
        <h1>字頻列表</h1>
        KDB名稱：<input id="inputKDBS"/>
        PB ID： <input id="inputPBS"/>
        <button onClick={this.handleSearch}>Search</button>
        <div id="showResult">
          {this.state.apiHREF.map((value,) => {
            return <PbInfo apiHREF={value}/>
          })}
        </div>

      </div>
    );
  }
}

export default ListPage;
