import React, {useState} from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function SuccessRegister({setToken}) {

    const location = useLocation();

    if (!location?.state?.status) {
        return (
            "page not found"
        )
    }
    return (
        <Container>
            <Row className="px-2 py-3">
                <Col sm={5}>
                    <h3>Registrasi Berhasil</h3>
                    <p className="mb-2">Berikut nomor registrasi satpen anda.</p>
                    <h2>{location.state.registerNumber}</h2>
                    <p>Untuk dapat masuk pada portal, anda harus login menggunakan nomor registrasi tersebut. Simpan nomor registrasi diatas. Nomor registrasi juga dikirimkan pada email anda.</p>

                    <Link to="/login"><Button variant="success">Login Page</Button></Link>           
                </Col>
            </Row>
        </Container>
    );
  
}