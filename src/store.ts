import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import RootSaga from './redux/rootSaga';
// import RootReducer from './redux/reducers/RootReducer'
// import RootSaga from './redux/sagas/RootSaga'


const runSaga = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' && window.REDUX_DEVTOOLS ?
  window.REDUX_DEVTOOLS({}) : null;
const enhancer = composeEnhancers(applyMiddleware(runSaga));

const store = createStore(
  // RootReducer,
  enhancer
)

runSaga.run(RootSaga)

export default store