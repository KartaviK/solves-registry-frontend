import * as React from 'react';
import {Route} from "react-router";
import Console from './Dashboard/Console';
import Settings from "./Dashboard/Settings";
import Statistics from "./Dashboard/Statistics";
import Users from "./Dashboard/Users";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default class Dashboard extends React.Component {
    render() {
        return <div className="container-fluid pt-2">
            <div className="row">
                <Router>
                    <div className="col-md-2">
                        <div className="nav flex-column">
                            <Link to="/console" className="bg-lightgrey-hover text-secondary m-1 nav-link">Console</Link>
                            <Link to="/settings" className="bg-lightgrey-hover text-secondary m-1 nav-link">Setting</Link>
                            <Link to="/statistics" className="bg-lightgrey-hover text-secondary m-1 nav-link">Statistics</Link>
                            <Link to="/users" className="bg-lightgrey-hover text-secondary m-1 nav-link">Users</Link>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <Route path={"/console"} component={Console}/>
                        <Route path={"/settings"} component={Settings}/>
                        <Route path={"/statistics"} component={Statistics}/>
                        <Route path={"/users"} component={Users}/>
                    </div>
                </Router>
            </div>
        </div>
    }
}
