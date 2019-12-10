import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#333" color="#eee" />
      <Routes />
    </Provider>
  );
}
export default App;
