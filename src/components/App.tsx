import React, {Component} from 'react';
import Sign from './Auth/Sign';
import {Container, Row} from "react-bootstrap";
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
            <Container fluid>
                <Route path="/" exact component={Stopwatch}/>
                <Route path="/home" component={Dashboard}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/statistics" component={Statistics}/>
            </Container>
        </Router>
    }

    protected static sign() {
        return <Container className="h-100 d-flex justify-content-center align-items-center">
            <Sign/>
        </Container>
    }
}
