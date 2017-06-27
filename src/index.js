import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import analyzedTest from './reducers/AnalyzedData'
import App from './containers/App/App';
import './index.css';

const store = createStore(analyzedTest)
const rootEl = document.getElementById('root')


const render = () => ReactDOM.render(
  <App
    analyzedData={store.getState()}
    store={store}
  //  analyzedResult={(analyzedResult) => store.dispatch({ type: 'ADD_TEXT',state: analyzedResult})}

  />,
  rootEl
)

render()
store.subscribe(render)
