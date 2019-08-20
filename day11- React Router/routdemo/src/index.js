import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App0 from './0App'
//BrowserRouter
import {BrowserRouter as Router} from 'react-router-dom'
//Router it keeps ui sync with url , it uses html5 history api , 
ReactDOM.render(
    <Router>
    <App />
    </Router>
    , document.getElementById('root'));

