
import { call, put, takeEvery } from 'redux-saga/effects';
import api from '../../../service';
import { loaderFailureSidebar, loaderSuccessSidebar } from './actions';
import { SidebarTypes } from './types';


export function* requestSidebar() {
  try {
    const { data } = yield call(api.get, '/sidebar');
    yield put(loaderSuccessSidebar(data));
  } catch (error) {
    yield put(loaderFailureSidebar());
  }
}


export function* watchSidebarSaga() {
  yield takeEvery(SidebarTypes.LOADER_REQUEST, requestSidebar)
}