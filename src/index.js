import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import './styles/main.css';
import './styles/preloader.css';
import './images/user_default.png';

ReactDOM.render(<App/>, document.getElementById('root'));
