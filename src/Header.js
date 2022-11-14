import React from "react";
import { Col, Row } from "react-bootstrap";

class Header extends React.Component {
    
    render() {
        return (
            <Row className="header justify-content-center">
                <Col className="text-align-center">
                    Recipes
                </Col>
            </Row>
        )
    }
}

export default Header