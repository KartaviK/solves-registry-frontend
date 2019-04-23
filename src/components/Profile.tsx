import * as React from "react";
import {Card, Col, Image} from "react-bootstrap";
import "../images/user_default.png";

export class Profile extends React.Component {
    public render() {
        return <Col md={3}>
            <Card>
                <Card.Img variant="top" src="user_default.png"/>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    }
}
