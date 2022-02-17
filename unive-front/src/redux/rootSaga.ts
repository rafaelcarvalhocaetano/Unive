import { all } from 'redux-saga/effects';

import { watchSidebarSaga } from './store/sidebar/saga';


export default function* RootSaga() {
  yield all([
    watchSidebarSaga()
  ])
}