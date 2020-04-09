/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/index.scss';

import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';

import App from './App';

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(rootReducer, devTools && devTools());
// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
