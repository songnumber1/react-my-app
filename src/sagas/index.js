import { all } from 'redux-saga/effects';
import { watchAgeUp, watchApiCalls } from './axois';

export function* rootSaga() {
  yield all([watchAgeUp(), watchApiCalls()]);
}
