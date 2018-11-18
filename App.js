"use strict";

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';
import './main.css';
//import counterReducer from "./counterReducer";
import combinedReducer from './redux/reducers.js';

let store=createStore(combinedReducer);

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Fragment>
                <PagesLinks />
                <PagesRouter />
            </Fragment>
        </Provider>
    </BrowserRouter>
, document.getElementById('container') );
