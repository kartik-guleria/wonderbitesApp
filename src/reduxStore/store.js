import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'reduxStore/reducers';
import rootSagas from 'reduxStore/sagas';
import Reactotron from 'reactotron-react-native';

const sagaMonitor = Reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];
let store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);

export {store};
