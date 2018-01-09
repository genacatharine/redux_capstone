import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import ReduxPromise from 'redux-promise'


const createStoreWithMiddleware= applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
<App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
