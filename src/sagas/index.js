import { all } from 'redux-saga/effects';
import { watchAgeUp, watchApiCalls } from '../sagas/api';

export function* rootSaga() {
  yield all([watchAgeUp(), watchApiCalls()]);
}
