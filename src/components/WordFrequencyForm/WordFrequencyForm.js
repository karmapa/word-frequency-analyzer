import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import './WordFrequencyForm.css';

class WordFrequencyForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {

    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit}>
          <label>
            <span>KDB名稱：</span>
          </label>
            <Field name="kdbName" component="input" type="text" className="input"/>
          <label>
            <span>PB ID：</span>
          </label>
            <Field name="pbId" component="input" type="text" className="input"/>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'WordFrequencyForm'
})(WordFrequencyForm);
