import React, {Component} from 'react';
// import Sign from './Auth/Sign';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Statistics} from "./Statistics";
import Header from './Header';
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import {Stopwatch} from "./Stopwatch";

export default class App extends Component {
    render() {
        return <Router>
            <Header/>
            <div className="container-fluid">
                <Route path="/" exact component={Stopwatch}/>
                <Route path="/home" component={Dashboard}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/statistics" component={Statistics}/>
            </div>
        </Router>
    }
}
