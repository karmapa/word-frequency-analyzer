import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import rootReducer from './redux/modules/rootReducer';
import App from './containers/App/App';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
