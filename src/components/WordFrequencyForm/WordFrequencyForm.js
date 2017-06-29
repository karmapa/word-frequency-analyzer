import React, {Component} from 'react';
import { Field, reduxForm, initialize } from 'redux-form';
import PropTypes from 'prop-types';

class WordFrequencyForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

    constructor(props){
      super(props)
      this.state={
        inputKdbName:'',
        inputPbId:'',
      }
    }

  handleKdbChange=(e)=>{
    this.setState({
      inputKdbName:e.target.value
    });
  }

  handlePbChange=(e)=>{
    this.setState({
      inputPbId:e.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {inputKdbName, inputPbId} = this.state;
    this.props.onSubmit({
      kdbName: inputKdbName,
      pbId: inputPbId,
    });
  };

  render() {

    const { handleSubmit, pristine, reset, submitting } = prop
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>KDB名稱: </span>
          <input value={this.state.inputKdbName} onChange={this.handleKdbChange}/>
        </label>
        <label>
          <span>PB ID：</span>
          <input value={this.state.inputPbId} onChange={this.handlePbChange}/>
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'WordFrequencyForm'
})(WordFrequencyForm);
