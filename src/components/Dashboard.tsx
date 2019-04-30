import * as React from 'react';
import {Col, Container, Row, Nav} from 'react-bootstrap';
import {Route} from "react-router";
import Console from './Dashboard/Console';
import Settings from "./Dashboard/Settings";
import Statistics from "./Dashboard/Statistics";
import Users from "./Dashboard/Users";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class Dashboard extends React.Component {
    render() {
        return <Container fluid className={"pt-2"}>
            <Row>
                <Router>
                    <Col md={2}>
                        <Nav defaultActiveKey="/console" className="flex-column">
                            <Link to="/console" className={"bg-lightgrey-hover text-secondary m-1 nav-link"}>Console</Link>
                            <Link to="/settings" className={"bg-lightgrey-hover text-secondary m-1 nav-link"}>Setting</Link>
                            <Link to="/statistics" className={"bg-lightgrey-hover text-secondary m-1 nav-link"}>Statistics</Link>
                            <Link to="/users" className={"bg-lightgrey-hover text-secondary m-1 nav-link"}>Users</Link>
                        </Nav>
                    </Col>
                    <Col md={10}>
                        <Route path={"/console"} component={Console}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/statistics"} component={Statistics}/>
                        <Route path={"/users"} component={Users}/>
                    </Col>
                </Router>
            </Row>
        </Container>
    }
}
