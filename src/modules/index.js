import { combineReducers } from 'redux';
import counter from './counter';
import api from './api';
import { all } from 'redux-saga/effects';
import { watchAgeUp, watchApiCalls } from '../sagas/saga';

const rootReducer = combineReducers({ counter, api });

export function* rootSaga() {
  yield all([watchAgeUp(), watchApiCalls()]);
}

export default rootReducer;
