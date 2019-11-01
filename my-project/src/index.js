import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';

import { Provider } from 'react-redux';
import { store } from './store';
// import { createStore, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';


// const reducers = { form: formReducer };
// const reducer = combineReducers(reducers);
// let store = createStore(reducer);
// console.log(store.getState());

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>
    , document.getElementById('root'));

