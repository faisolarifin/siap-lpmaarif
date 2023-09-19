import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../Helpers/apiclient";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

export default function Login({setToken, setAccess}) {

    const navigate = useNavigate();
    const [credential, setCredential] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();
        await apiClient.post("/login", credential)
        .then((res) => {
            setToken(res.data.response.token);
            setAccess(res.data.response.access);
            navigate("/satpen");
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
                    <h1>Login Admin</h1>
                    <Form onSubmit={handleSubmit} method="post">
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="success" type="submit">Login</Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
}