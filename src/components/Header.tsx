import * as React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    public render() {
        return (
            <Navbar variant={"dark"} className="bg-primary shadow">
                <Nav>
                    <Link to="/" className="nav-link">Home</Link>
                </Nav>
                <Nav>
                    <Link to="/profile" className="nav-link">Profile</Link>
                </Nav>
                <Nav>
                    <Link to="/statistics" className="nav-link">Statistics</Link>
                </Nav>
            </Navbar>
        );
    }
}
