import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import 'material-design-icons/iconfont/material-icons.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/js/all';
import 'bootstrap/scss/bootstrap.scss';
import "bootstrap/js/dist/modal";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
