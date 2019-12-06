import { createStore, compose, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './ducks';
// import rootSaga from './sagas';

const middlewares = [];

// const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
// middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['test'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export { store, persistor };
