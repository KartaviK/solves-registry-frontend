import React, {Component} from 'react';
import Sign from './Auth/Sign';
import {Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Statistics} from "./Statistics";
import Dynamic from "./Dynamic";

export default class App extends Component {
    render() {
        return <Router>
            <Dynamic resolve={() => import("./Header")}/>
            <Container style={{height: "95%"}} fluid>
                <Route path="/" exact render={() => <Dynamic
                    resolve={() =>
                        import("./Home/Content")
                    }
                    inProps={{
                        text: 'hello'
                    }}/>
                }/>
                <Route path="/profile" render={() => <Container fluid>
                    <Row>
                        <Dynamic resolve={() => import("./Profile")}/>
                    </Row>
                </Container>}/>
                <Route path={"/statistics"} component={Statistics}/>
            </Container>
        </Router>
    }

    protected static sign() {
        return <Container className="h-100 d-flex justify-content-center align-items-center">
            <Sign/>
        </Container>
    }
}
