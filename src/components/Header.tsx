import * as React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    public render() {
        return  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <Link className="navbar-brand" to="/">Brand</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar-menu" aria-controls="navbar-menu"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/statistics">Statistics</Link>
                    </li>
                </ul>
            </div>
        </nav>;
    }
}
