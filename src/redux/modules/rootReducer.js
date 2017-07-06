import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import wordFrequency from './wordFrequency';
import WordFrequencyForm from './../../components/WordFrequencyForm/WordFrequencyForm';

export default combineReducers({
  wordFrequency,
  form: formReducer
});
