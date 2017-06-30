import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class WordFrequencyForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  render() {

    const {handleSubmit, pristine, reset, submitting} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>KDB名稱:</span>
          </label>
          <div>
            <Field name="kdbName" component="input" type="text" />
          </div>
        </div>
        <div>
          <label>
            <span>PB ID：</span>
          </label>
          <div>
            <Field name="pbId" component="input" type="text" />
          </div>
        </div>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'WordFrequencyForm'
})(WordFrequencyForm);
