import React, {Component} from 'react';
import Sign from './Auth/Sign';
import {Container} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <Container className="h-100 d-flex justify-content-center align-items-center">
                <Sign/>
            </Container>
        );
    }
}

export default App;
