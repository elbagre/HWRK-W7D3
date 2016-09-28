import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';

import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});

// const addLoggingToDispatch = (store) => (next) => (action) => {
//   const dispatchStore = store.dispatch;
//   console.log(store.getState());
//   console.log(action);
//   const dispatchedState = store.dispatch(action);
//   console.log(store.getState());
//   return dispatchedState;
// };
//
// const applyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach( (middleware) => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, {dispatch});
// };
