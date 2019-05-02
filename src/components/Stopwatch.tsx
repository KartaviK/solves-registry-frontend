import * as React from "react";
import Timer from 'react-compound-timer';
import {INITED, PLAYING, STOPPED} from "react-compound-timer/build/lib/models/TimerState";
import {Container} from "react-bootstrap";

export class Stopwatch extends React.Component {
    public readonly state: { time: number } = {
        time: 0,
    };

    componentDidMount(): void {
        this.setState({time: 0});
    }

    start(timerStartHandler, timerResetHandler) {
        timerResetHandler();
        timerStartHandler();
    }

    stop(timerStopHandler, getTime) {
        timerStopHandler();
    }

    public render() {
        return <Timer startImmediately={false} timeToUpdate={10}>
            {({start, stop: timerStopHandler, reset, getTime, timerState}) => <React.Fragment>
                <Container
                    fluid
                    className={"p-5 d-flex justify-content-center"}
                    style={{
                        outline: "inherit",
                        fontSize: "12vw",
                        userSelect: "none",
                    }}
                    tabIndex={1}
                    // onKeyDown={e => {
                    //     if (e.keyCode == 32) {
                    //         timerState !== STOPPED && timerState !== INITED && this.stop(timerStopHandler, getTime);
                    //     }
                    // }}
                    onKeyUp={e => {
                        if (e.keyCode == 32) {
                            this.start(start, reset)
                        }
                    }}
                >
                    <Timer.Hours formatValue={number => number === 0 ? '' : `${number}:`}/>
                    <Timer.Minutes/>:<Timer.Seconds/>.
                    <Timer.Milliseconds formatValue={number => number < 100 ? `${number / 10}0` : `${number / 10}`}/>
                </Container>
            </React.Fragment>}
        </Timer>;
    }
}
