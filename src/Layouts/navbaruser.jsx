import React from "react";
import logo from '../Images/green-nahdlatul-ulama-logo.png';
import user from '../Images/people.png';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';

export default function TopNavbar() {
    return (
        <>
        <Navbar bg="white" expand="lg" fixed="top" className="navbar-shadow">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                    src={logo}
                    width="89"
                    height="60"
                    className="d-inline-block align-middle"
                    alt="Nahdatul Ulama Logo"
                    />
                    <h6 className="d-inline-block mb-0 align-middle">Sistem Administrasi Pendidikan <br />LP Ma'arif Nahdatul Ulama</h6>
                </Navbar.Brand>

                <Dropdown className="user-profile">
                    <Dropdown.Toggle variant="white" id="dropdown-basic" className="px-4">
                        <img src={user} className="rounded-circle" alt="..." />
                        <span className="text-uppercase"> ACH. FAISOL</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item className="d-flex p-2 align-items-center">
                            <div className="img-profile me-2">
                                <img src={user} className="rounded-circle" alt="..." />
                            </div>
                            <div className="d-flex flex-column title-profile">
                                <strong className="text-uppercase">ACH. FAISOL</strong>
                                <small>Admin</small>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-2">Ganti Password</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>

        </>
    );
}