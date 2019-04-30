import * as React from "react";
import {Table} from 'react-bootstrap';
import axios from 'axios';
import {ISolve} from "./interfaces/Solve";

export interface IState {
    solves: Array<ISolve>
}

export class SolvesTable extends React.Component<{}, IState> {
    public readonly state: IState = {
        solves: []
    };

    componentDidMount(): void {
        this.getSolves()
            .then((data) => {
                console.log(data);
                this.setState({solves: data || []})
            });
    }

    getSolves = async () => {
        return (await axios.get("http://solves-registry.local/v1/solves")).data;
    };

    public render() {
        return <Table className="m-0" variant="dark" size="sm" borderless striped hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Created at</th>
            </tr>
            </thead>
            <tbody>
            {this.state.solves.length > 0 && (
                this.state.solves.map((solve: ISolve, index:number) => <tr key={index}>
                    <td>{solve.id}</td>
                    <td>{solve.time}</td>
                    <td>{solve.created_at}</td>
                </tr>)
            )}
            </tbody>
        </Table>
    }
}
