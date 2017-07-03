import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import clientMiddleware from './redux/middlewares/clientMiddleware';
import rootReducer from './redux/modules/rootReducer';
import App from './containers/App/App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(clientMiddleware(fetch)));

const component = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  component,
  document.getElementById('root')
);
