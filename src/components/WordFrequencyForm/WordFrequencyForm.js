import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WordFrequencyForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {inputKdbName, inputPbId} = this.refs;
    this.props.onSubmit({
      kdbName: inputKdbName.value,
      pbId: inputPbId.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>KDB名稱: </span>
          <input ref="inputKdbName" />
        </label>
        <label>
          <span>PB ID：</span>
          <input ref="inputPbId" />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default WordFrequencyForm;
