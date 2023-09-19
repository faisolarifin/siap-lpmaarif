import React, {useState, useEffect} from "react";
import '../../../Styles/timeline.css';
import { Container, Breadcrumb, Row, Col, Button, Table } from 'react-bootstrap';
import apiClient from "../../../Helpers/apiclientuser";
import {useNavigate} from "react-router-dom";

export default function Satpen({token}) {

    const navigate = useNavigate();

    const [satpenProfile, setSatpenProfile] = useState({});

    useEffect(() => {
        apiClient.get("/profile",
            {
                headers : {
                    "Authorization" : "Bearer " + token
                }
        }).then((res) => {
            if (res.status == 200) {
                setSatpenProfile(res.data.response.satpen);
                return;
            }
        }).catch(({response}) => {

        });
    }, [navigate]);

    const downloadFilePiagam = () => {
        apiClient.get("/download/piagam",
            {
                headers : {
                    "Authorization" : "Bearer " + token
                },
                responseType : 'blob',
        }).then((res) => {
            if (res.status == 200) {
                const headers = res.headers;
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', headers['content-type']);
                document.body.appendChild(link);
                link.click();
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const downloadFileSk = () => {
        apiClient.get("/download/sk",
            {
                headers : {
                    "Authorization" : "Bearer " + token
                },
                responseType : 'blob',
            }).then((res) => {
            if (res.status == 200) {
                const headers = res.headers;
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', headers['content-type']);
                document.body.appendChild(link);
                link.click();
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container-begin">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                </Breadcrumb>

                <div className="begin">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between align-content-center mb-2">
                                <h6>PROFILE SATPEN</h6>
                            </div>

                            <Row>
                                <Col>
                                    <Table borderless>
                                        <tbody>
                                            <tr>
                                                <td width={140}>Nama Satpen</td>
                                                <td width={50}>:</td>
                                                <td>{satpenProfile.nm_satpen}</td>
                                            </tr>
                                            <tr>
                                                <td>No. Registrasi</td>
                                                <td>:</td>
                                                <td>{satpenProfile.no_registrasi}</td>
                                            </tr>
                                            <tr>
                                                <td>Kategori Satpen</td>
                                                <td>:</td>
                                                <td>{satpenProfile.kategori?.nm_kategori}</td>
                                            </tr>
                                            <tr>
                                                <td>Yayasan</td>
                                                <td>:</td>
                                                <td>{satpenProfile.yayasan}</td>
                                            </tr>
                                            <tr>
                                                <td>Kepala Sekolah</td>
                                                <td>:</td>
                                                <td>{satpenProfile.kepsek}</td>
                                            </tr>
                                            <tr>
                                                <td>No. Telpon</td>
                                                <td>:</td>
                                                <td>{satpenProfile.telpon}</td>
                                            </tr>
                                            <tr>
                                                <td>Provinsi</td>
                                                <td>:</td>
                                                <td>{satpenProfile?.provinsi?.nm_prov}</td>
                                            </tr>
                                            <tr>
                                                <td>Kabupaten</td>
                                                <td>:</td>
                                                <td>{satpenProfile?.kabupaten?.nama_kab}</td>
                                            </tr>
                                            <tr>
                                                <td>Kecamatan</td>
                                                <td>:</td>
                                                <td>Sss</td>
                                            </tr>
                                            <tr>
                                                <td>Kelurahan/Desa</td>
                                                <td>:</td>
                                                <td>{satpenProfile.kelurahan}</td>
                                            </tr>
                                            <tr>
                                                <td>Alamat</td>
                                                <td>:</td>
                                                <td>{satpenProfile.alamat}</td>
                                            </tr>
                                            <tr>
                                                <td>Aset Tanah</td>
                                                <td>:</td>
                                                <td>{satpenProfile.aset_tanah}</td>
                                            </tr>
                                            <tr>
                                                <td>Nama Pemilik</td>
                                                <td>:</td>
                                                <td>{satpenProfile.nm_pemilik}</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </Col>
                                <Col>
                                    <ul className="timeline">
                                        {satpenProfile?.timeline?.map((row, idx) =>
                                            <li>
                                                <a href="#" className="text-capitalize">{row.status_verifikasi}</a>
                                                <a href="#" className="float-end">{row.keterangan}</a>
                                                <p>{row.tgl_status}</p>
                                            </li>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                            <Row className={"mt-3"}>
                                <Col className="d-flex justify-content-center align-items-md-center">
                                    <div className="file-download-box">
                                        <p className={"mb-2"}>Piagam Ma'arif</p>
                                        <Button onClick={downloadFilePiagam} size={"sm"}>unduh</Button>
                                    </div>
                                    <div className="file-download-box">
                                        <p className={"mb-2"}>SK Satpen</p>
                                        <Button onClick={downloadFileSk} size={"sm"}>unduh</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <Table bordered className="w-75 text-center">
                                        <thead>
                                        <tr>
                                            <th>Status Registrasi</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="text-capitalize">{ satpenProfile.timeline !== undefined ?
                                                satpenProfile?.timeline[satpenProfile?.timeline.length - 1].status_verifikasi : ''}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

            </Container>    
        </div>
    );
}