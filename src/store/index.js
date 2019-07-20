import { createStore, applyMiddleware, compose } from 'redux';
import { createPromise } from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const reduxStore = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk, createPromise({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] })),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

export default reduxStore;
