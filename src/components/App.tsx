import React, {Component} from 'react';
import Sign from './Auth/Sign';
import {Container} from "react-bootstrap";
import {Header} from "./Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Profile} from "./Profile";
import {Statistics} from "./Statistics";

class App extends Component {
    render() {
        return <Router>
            <Header/>
            <Route path="/" exact render={() => <div style={{height: "95%"}}>
                <Container fluid>1123123</Container>
            </div>}/>
            <Route path={"/profile"} component={Profile}/>
            <Route path={"/statistics"} component={Statistics}/>
        </Router>
    }

    protected static sign() {
        return <Container className="h-100 d-flex justify-content-center align-items-center">
            <Sign/>
        </Container>
    }
}

export default App;
