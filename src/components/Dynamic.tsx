import React, {Component} from "react";
import PropTypes from "prop-types";
import {DefaultPreloader} from "./preloaders/DefaultPreloader";

export interface DynamicProps {
    resolve: Function,
    inProps?: any,
}

export interface DynamicState {
    component?: React.FunctionComponent,
}

export default class Dynamic extends Component<DynamicProps, DynamicState> {
    public static readonly defaultProps: DynamicProps = {
        resolve: PropTypes.func,
        inProps: null,
    };

    public readonly state: DynamicState = {
        component: undefined
    };

    public constructor(props: DynamicProps) {
        super(props);

        this.state = {};
    }

    public async componentDidMount(): Promise<any> {
        const { resolve } = this.props;
        const { default: module } = await resolve();

        this.setState({
            component: module
        });
    }

    public render() {
        const { component } = this.state;
        const { inProps } = this.props;

        if (!component) {
            return <DefaultPreloader />;
        }
        if (component) {
            return React.createElement(component, inProps);
        }
    }
}
