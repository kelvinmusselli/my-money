import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#333"
          color="#eee"
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
