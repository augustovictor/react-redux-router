import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

// import App from './components/app'; This is no longer needed since there is no more start component to the application
import reducers from './reducers';

import Header from './components/navbar';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Header />    
  </Provider>
  , document.querySelector('.container'));
