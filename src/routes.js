import React from 'react';
import { Router } from 'react-router';
import Dashboard from "~/components/Dashboard";
import Home from "~/Home";

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

const routes = {
    component: Dashboard,
    IndexRoute: {
        component: Home,
        title: "Главная",
    },
    childRoutes: [
        path
    ]
};

export default <Router routes={routes} />;
