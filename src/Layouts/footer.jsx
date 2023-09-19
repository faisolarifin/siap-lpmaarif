import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
        <Container>
            <Row className="mt-5">
                <Col className="text-center">
                    <p className="py-2">Copyright &copy; 2023 Siap Lp Ma'arif</p>
                </Col>
            </Row>
        </Container>
        </>
    );
}