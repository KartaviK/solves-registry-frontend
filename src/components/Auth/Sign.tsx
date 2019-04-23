import * as React from "react";
import {Button, Card, Container, Form, Col} from 'react-bootstrap';

class Sign extends React.Component {
    public render() {
        return <Container>
            <Col md={{span: 6, offset: 3}}>
                <Card bg={"dark"} className="rounded-0">
                    <Form>
                        <Card.Header className="text-light">
                            Authentication
                        </Card.Header>
                        <Card.Body>
                            <Form.Group controlId="login">
                                <Form.Label className="text-light">Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login"/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label className="text-light">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter pass"/>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit" className="rounded-0">
                                Submit
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </Col>
        </Container>;
    }
}

export default Sign;
