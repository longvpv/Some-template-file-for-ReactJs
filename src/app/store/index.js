import * as reduxModule from "redux";
import { applyMiddleware, compose, createStore } from "redux";
import createReducer from "./reducers";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
const saga = createSagaMiddleware();
/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

// const sagaMiddleware = createSagaMiddleware();
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }

  return applyMiddleware(...middleware)
}

const store = createStore(createReducer(), bindMiddleware([thunk, saga]));
store.sagaTask = saga.run(rootSaga);
store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key])
    return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

export default store;
