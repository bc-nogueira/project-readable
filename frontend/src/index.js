import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import $ from 'jquery';
import App from './App';
import combinedReducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
