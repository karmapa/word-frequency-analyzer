import React, {Component} from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Input, Button, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './WordFrequencyForm.css';

class WordFrequencyForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  kdbNameInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />
        }
        <Input
          error={hasError}
          fluid
          {...input}
          {...custom} />
      </div>
    );
  }

  render() {

    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <span>KDB名稱：</span>
        </label>
        <Field name="kdbName" component={this.kdbNameInput} type="text" className="input" />
        <label>
          <span>PB ID：</span>
        </label>
        <Field name="pbId" component={this.kdbNameInput} type="text" className="input" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.kdbName || values.kdbName.trim() === '') {
    errors.kdbName = 'KDB 名稱是必填欄位'
  }
  return errors
}

export default reduxForm({
  form: 'WordFrequencyForm',
  validate,
})(WordFrequencyForm);
