import { createStore, applyMiddleware, compose, } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(sagaMiddleware))
  : applyMiddleware(sagaMiddleware);

const Store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default Store;
