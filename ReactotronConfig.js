import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sagaPlugin from 'reactotron-redux-saga'

Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure()
  .use(sagaPlugin())
  .useReactNative() // add all built-in react native plugins
  .connect();
  