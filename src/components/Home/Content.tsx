import * as React from "react";
import {Card, Container as BootstrapContainer, Col} from 'react-bootstrap';
import {SolvesTable} from "../SolvesTable";

export default class Content extends React.Component {
    public readonly props: { text?: string };

    public render() {
        return <BootstrapContainer fluid>
            <Col md={4}>
                <Card border="dark">
                    <Card.Header>
                        Solves
                    </Card.Header>
                    <Card.Body className="p-0">
                        <SolvesTable/>
                    </Card.Body>
                </Card>
            </Col>
        </BootstrapContainer>
    }
}
