import * as React from "react";
import axios from 'axios';
import {VictoryChart, VictoryTheme, VictoryScatter} from 'victory';
import {Container, Row, Col, Table} from "react-bootstrap";
import * as PrettyMs from 'pretty-ms';

export interface Solve {
    id: number,
    time: number,
}

export interface StatisticsState {
    solves: Array<Solve>
}

export class Statistics extends React.Component<StatisticsState, {}> {
    public readonly state: StatisticsState = {
        solves: []
    };

    public constructor(props) {
        super(props);

        this.loadSolves();
    }

    public loadSolves() {
        axios.request({url: "http://solves-registry.local/v1/solves"})
            .then(response => {
                this.setState({
                    solves: response.data
                })
            });
    };

    public getGraph() {
        if (this.state.solves.length !== 0) {
            const times = this.state.solves.map(solve => { return solve.time / 1000});
            const maxTime = Math.max.apply(Math, times);
            const minTime = Math.min.apply(Math, times);

            return <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x: [1, this.state.solves.length], y: [Math.floor(minTime), Math.ceil(maxTime)] }}
            >
                <VictoryScatter
                    style={{ data: { fill: "#c43a31" } }}
                    size={1}
                    data={times.map((time, index) => {
                        return { x: index, y: time};
                    })}
                />
            </VictoryChart>
        } else {
            return <>Load</>
        }
    };

    public render() {
        return this.getGraph();
        // return <Table striped>
        //     <thead>
        //         <tr>
        //             <td>#</td>
        //             <td>Time</td>
        //         </tr>
        //     </thead>
        //     <tbody>
        //     {this.state.solves.map((solve:Solve, index) => <tr key={index.toString()}>
        //         <td>{solve.id}</td>
        //         <td>{solve.time}</td>
        //     </tr>)}
        //     </tbody>
        // </Table>
    }
}
