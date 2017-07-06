import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import wordFrequency from './wordFrequency';

export default combineReducers({
  wordFrequency,
  form: formReducer
});
