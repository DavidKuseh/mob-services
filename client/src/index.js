import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const bigReducer = combineReducers({
    
})

const store = createStore(
    bigReducer,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

