import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./redux/rootReducer";
import RootSaga from "./redux/rootSaga";
import { SidebarDataState } from "./redux/store/sidebar/types";

export interface ApplicationState {
  sidebarReducer: SidebarDataState
}

const rootSagaStore = createSagaMiddleware();

const store: Store<ApplicationState> | any = createStore(RootReducer, applyMiddleware(rootSagaStore));
console.log("🚀 ~ file: store.ts ~ line 14 ~ store", store)

rootSagaStore.run(RootSaga);

export default store;