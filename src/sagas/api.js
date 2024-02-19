import { takeLatest, put, delay, call } from 'redux-saga/effects';
import { fetchData, fetchData2, fetchData3 } from '../api/apiservices';
import { apiSliceAction } from '../modules/api';

function* ageUpAsync() {
  console.log('ageup async');
  yield delay(2000);
  yield put(apiSliceAction.AGE_UP_ASYNC(1));
}

export function* watchAgeUp() {
  console.log('watchAgeUp');
  yield takeLatest('AGE_UP', ageUpAsync);
}

function* callApis(action) {
  console.log('call api async');
  try {
    const data2 = yield call(fetchData2);
    yield put(apiSliceAction.CALL_POST_API(data2));

    const data = yield call(fetchData);
    yield put(apiSliceAction.CALL_APIS_FULFILLED(data));

    const data3 = yield call(fetchData3);
    yield put(apiSliceAction.CALL_APIS_FULFILLED3(data3));

    yield put(apiSliceAction.NOTIFY());
  } catch (e) {
    console.log(e);
  }

  //1 call a get API
  //2 do a post API
  //3 if 2 has succeed create a notification
}

export function* watchApiCalls() {
  console.log('watchApiCalls');
  yield takeLatest('CALL_APIS', callApis);
}
