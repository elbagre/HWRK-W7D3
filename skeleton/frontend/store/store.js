import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

const configureStore = (preloadedState = {}) => (
  createStore(
    reducer,
    preloadedState,
    applyMiddleware(applyMiddlewares)
  )
);

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach( (middleware) => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, {dispatch});
};


export default configureStore;
