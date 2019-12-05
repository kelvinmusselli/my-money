import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import VerifyLogin from './components/verifyUser/index';

// import { Container } from './styles';

export default function App() {
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#333"
            color="#eee"
          />
          <VerifyLogin />
        </Provider>
      </PersistGate>
    </>
  );
}
