import React from 'react';
import MainNavigator from 'navigation/MainNavigator';
import {store} from 'reduxStore/store';
import {Provider} from 'react-redux';
import 'constants/IMLocalize';
import Toast from 'react-native-toast-message';
export default function App(props) {
  return (
    <Provider store={store}>
      <MainNavigator/>
      <Toast />
    </Provider>
  );
}