import { all, fork } from 'redux-saga/effects';
import { cafeSaga } from './cafeSaga';
import { employeeSaga } from './employeeSaga';

export function* rootSaga() {
  yield all([fork(cafeSaga), fork(employeeSaga)]);
}