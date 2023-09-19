import React, {useState, useEffect} from "react";
import { Row, Col, Table, Button } from 'react-bootstrap';

export default function Verifikasi() {
    return (
        <>
            <div className="begin">
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between align-content-center mb-2">
                            <h6>Data Sekolah</h6>
                            <div>
                                <Button variant="primary" size="sm">Tambah</Button>
                            </div>
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>NPSN</th>
                                <th>No. Registrasi</th>
                                <th>Nama Satpen</th>
                                <th>Kategori</th>
                                <th>Jenjang</th>
                                <th>Yayasan</th>
                                <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Detail</td>
                                </tr>
                                <tr>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Sss</td>
                                    <td>Detail</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </>
    );
}