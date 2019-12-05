import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from './ducks';
import sagas from './sagas';

import ImmutablePersistenceTransform from '../config/ImmutablePersistenceTransformConfig';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : compose(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['login'],
  transforms: [ImmutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
