import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, Message} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import './WordFrequencyForm.css';

class WordFrequencyForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleInput({input, meta: {touched, error}, ...custom }) {
    const hasError = undefined !== touched && error;
    return (
      <div className="inputArea">
        <Input
          error={hasError}
          fluid
          {...input}
          {...custom}
        />
        {hasError &&
          <div className="inputError">
          <Message
            error
            content={error}
          />
          </div>
        }
      </div>
    );
  }

  render() {

    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          <span>KDB名稱：</span>
        </label>
        <Field name="kdbName" component={this.handleInput} type="text" className="input" />
        <label>
          <span>PB ID：</span>
        </label>
        <Field name="pbId" component={this.handleInput} type="text" className="input" />
        <button type="submit">Search</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  const pbRegRule = new RegExp (/^\d{1}-\d{1}-\d{1}[a-zA-Z]$/);

  if (!values.kdbName || '' === values.kdbName.trim()) {
    errors.kdbName = 'KDB 名稱是必填欄位';
  }
  else  if (!values.pbId || '' === values.pbId.trim()) {
    errors.pbId = 'PB ID 是必填欄位';
  }
  else if (!pbRegRule.test(values.pbId)) {
    errors.pbId = '格式範例：1-1-1a';
  }
  return errors;
}

export default reduxForm({
  form: 'WordFrequencyForm',
  validate,
})(WordFrequencyForm);
