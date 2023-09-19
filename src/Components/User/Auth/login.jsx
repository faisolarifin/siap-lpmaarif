import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../Helpers/apiclientuser";
import {Container, Col, Row, Form, Button, Alert} from "react-bootstrap";

export default function Login({setToken}) {

    const navigate = useNavigate();
    const [validationError,setValidationError] = useState({});
    const [error,setError] = useState("");
    const [credential, setCredential] = useState({
        username: "",
        password: "",
    });

    const clearHandleSubmit = () => {
        setValidationError({});
        setError("");
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await apiClient.post("http://siap-lpmaarif-backend.test/api/v1/login", credential)
        .then((res) => {
            setToken(res.data.response.token);
            navigate("/profile");
        }).catch(({response}) => {
            clearHandleSubmit();
            if (response.status == 422) {
                setValidationError(response.data.response.errors);
                return;
            }
            else if (response.status == 406) {
                setError(response.data.response.message);
                return;
            }
        });
    }

    const handleChange = (e) => {
        setCredential({
          ...credential,
          [e.target.name] : e.target.value,
        })
      }
   
    return (
        <Container>
            <Row className="px-2 py-3">
                <Col sm={5}>
                    <h1>Silahkan Login</h1>
                    <Form onSubmit={handleSubmit} method="post">
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Nomor Registrasi</Form.Label>
                            <Form.Control type="text" placeholder="Nomor Registrasi" name="username" onChange={handleChange} isInvalid={!!validationError.username} />
                            <Form.Control.Feedback type="invalid">
                                {validationError.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} isInvalid={!!validationError.password} />
                            <Form.Control.Feedback type="invalid">
                                {validationError.password}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {
                            error ? (
                                <Alert key="danger" variant="danger">{error}</Alert>
                            ) : ''
                        }
                        <Button variant="success" type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}