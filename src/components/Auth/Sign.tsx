import * as React from "react";
import {Button, Card, Container, Form, Col} from 'react-bootstrap';

class Sign extends React.Component {
    public render() {
        return <Container>
            <Col md={{span: 6, offset: 3}}>
                <Form>
                    <Card>
                        <Card.Body>
                            <Form.Group controlId="login">
                                <Form.Label>Login</Form.Label>
                                <Form.Control type="text" placeholder="Enter login"/>
                            </Form.Group>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit">
                                Sign in
                            </Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Col>
        </Container>;
    }
}

export default Sign;
