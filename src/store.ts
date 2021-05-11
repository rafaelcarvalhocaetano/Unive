import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./redux/rootReducer";
import RootSaga from "./redux/rootSaga";
import { SidebarDataTypes } from "./redux/store/sidebar/types";

export interface ApplicationState {
  sidebar: SidebarDataTypes
}

const rootSagaStore = createSagaMiddleware();

const store: Store<ApplicationState> | any = createStore(RootReducer, applyMiddleware(rootSagaStore));

rootSagaStore.run(RootSaga);

export default store;