import { all, takeLatest } from 'redux-saga/effects';
// import { fetchPeople, detailPerson } from './peopleSaga';

// import * as TYPES from '../types/TYPE_PERSON'

export default function* RootSaga() {
  yield all([
    // takeLatest(TYPES.PEOPLE_REQUEST, fetchPeople),
    // takeLatest(TYPES.DETAILS_REQUEST, detailPerson)
  ])
}