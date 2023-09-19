import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../Helpers/apiclientuser";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";

export default function Register({token}) {

    const navigate = useNavigate();

    const [validationError,setValidationError] = useState({});
    const [error,setError] = useState("");

    const [npsn, setNpsn] = useState({
        npsn: "",
    });
    const [result, setResult] = useState({});
    const [register, setRegister] = useState(false);
    const [dataRegister, setDataRegister] = useState({
        npsn: "",
        kode_kab: "",
        kode_prov: "",
        kode_jenjang: "",
        nm_satpen: "",
        yayasan: "",
        kepsek: "",
        telpon: "",
        email: "",
        thn_berdiri: "",
        kelurahan: "",
        alamat: "",
        aset_tanah: "",
        nm_pemilik: "",
        logo: "logo.jpg",
        password: "",
    });

    const clearHandleSubmit = () => {
        setValidationError({});
        setResult({});
        setError("");
    }

    const handleSubmit = async e => {
        e.preventDefault();    
        apiClient.post("/ceknpsn", npsn,
        {
            headers : {
                "Authorization" : "Bearer " + token
            }
        }).then((res) => {
            clearHandleSubmit();
            if (res.status == 200) {
                setResult(res.data.response.data);
                return;
            }
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

    const handleSubmitRegister = async e => {
        e.preventDefault();    
        apiClient.post("/register", dataRegister,
        {
            headers : {
                "Authorization" : "Bearer " + token
            }
        }).then((res) => {
            if (res.status == 201) {
                navigate("/register/success", {
                    state: {
                        status: true,
                        registerNumber: res.data.response.data.kode_register,
                    }
                })
            }
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
    

    const handleNextRegister = e => {
        e.preventDefault();
        setRegister(!register);
        setDataRegister({
            npsn: result.npsn,
            kode_kab: result.kode_kab,
            kode_prov: result.kode_prov,
            nm_satpen: result.nama_sekolah,
        });
    }

    const handleChange = (e) => {
        setNpsn({
          ...npsn,
          [e.target.name] : e.target.value,
        })
    }
    const handleRegister = (e) => {
        setDataRegister({
          ...dataRegister,
          [e.target.name] : e.target.value,
        })
      }
   
    return (
        <>
        <Container>
            {
                register ? (
                    <Row className="px-2 py-3">
                        <Col sm={10}>
                            <h1>Cek Nomor Kepala Sekolah Nasional</h1>
                            <small>Sebelum melakukan pendaftaran satpen, anda perlu memvalidasi npsn dari data dapo kemendikbud.</small>
                            <Form onSubmit={handleSubmit} method="post">
                                <Form.Group className="mb-3" controlId="npsn">
                                    <Form.Label>NPSN</Form.Label>
                                    <Form.Control type="text" placeholder="NPSN" name="npsn" value={npsn.npsn} onChange={handleChange} isInvalid={!!validationError.npsn} />
                                    <Form.Control.Feedback type="invalid">
                                        {validationError.npsn}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {
                                   Object.keys(result).length > 0 ? (
                                    <div>
                                        <strong>Satpen ditemukan:</strong>
                                        <p>{result.npsn} - {result.nama_sekolah}</p>
                                    </div>
                                   ) : error ? (
                                        <Alert key="danger" variant="danger">{error}</Alert>
                                   ) : ''
                                }
                                <Button variant="success" type="submit">Cek</Button>
                                {
                                   Object.keys(result).length > 0 ? (
                                        <Button variant="primary" type="button" className="ms-2" onClick={handleNextRegister}>Form Registrasi</Button>
                                    ) : ''
                                }

                            </Form>
                        </Col>
                    </Row>
                ) :
                (
                    <Row className="px-2 py-3">
                        <Col sm={8}>
                            <h1>Pendaftaran Satpen</h1>
                            <Form onSubmit={handleSubmitRegister} method="post">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="npsn">
                                            <Form.Label>NPSN</Form.Label>
                                            <Form.Control type="text" placeholder="NPSN" name="npsn" value={dataRegister.npsn} onChange={handleRegister} isInvalid={!!validationError.npsn} disabled />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.npsn}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="nm_satpen">
                                            <Form.Label>Nama Satpen</Form.Label>
                                            <Form.Control type="text" placeholder="Nama Satpen" name="nm_satpen" value={dataRegister.nm_satpen} onChange={handleRegister} isInvalid={!!validationError.nm_satpen} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.nm_satpen}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="yayasan">
                                            <Form.Label>Yayasan</Form.Label>
                                            <Form.Control type="text" placeholder="Yayasan" name="yayasan" onChange={handleRegister} isInvalid={!!validationError.yayasan} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.yayasan}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="kode_jenjang">
                                            <Form.Label>Jenjang Pendidikan</Form.Label>
                                            <Form.Control type="text" placeholder="Jenjang Pendidikan" name="kode_jenjang" onChange={handleRegister} isInvalid={!!validationError.kode_jenjang} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.kode_jenjang}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="kode_prov">
                                            <Form.Label>Provinsi</Form.Label>
                                            <Form.Control type="text" placeholder="Provinsi" name="kode_prov" value={dataRegister.kode_prov} onChange={handleRegister} isInvalid={!!validationError.kode_prov} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.kode_prov}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="kode_kab">
                                            <Form.Label>Kabupaten</Form.Label>
                                            <Form.Control type="text" placeholder="Kabupaten" name="kode_kab" value={dataRegister.kode_kab} onChange={handleRegister} isInvalid={!!validationError.kode_kab} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.kode_kab}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="kec">
                                            <Form.Label>Kecamatan</Form.Label>
                                            <Form.Control type="text" placeholder="Kecamatan" name="kec" onChange={handleRegister} isInvalid={!!validationError.kec} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.kec}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="kelurahan">
                                            <Form.Label>Kelurahan</Form.Label>
                                            <Form.Control type="text" placeholder="Kelurahan" name="kelurahan" onChange={handleRegister} isInvalid={!!validationError.kelurahan} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.kelurahan}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="alamat">
                                            <Form.Label>Alamat</Form.Label>
                                            <Form.Control type="text" placeholder="Alamat" name="alamat" onChange={handleRegister} isInvalid={!!validationError.alamat} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.alamat}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="kepsek">
                                            <Form.Label>Kepala Sekolah</Form.Label>
                                            <Form.Control type="text" placeholder="Kepala Sekolah" name="kepsek" onChange={handleRegister} isInvalid={!!validationError.kepsek} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.kepsek}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="thn_berdiri">
                                            <Form.Label>Tahun Berdiri</Form.Label>
                                            <Form.Control type="text" placeholder="Tahun Berdiri" name="thn_berdiri" onChange={handleRegister} isInvalid={!!validationError.thn_berdiri} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.thn_berdiri}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Email" name="email" onChange={handleRegister} isInvalid={!!validationError.email} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="telpon">
                                            <Form.Label>Telpon</Form.Label>
                                            <Form.Control type="text" placeholder="Telpon" name="telpon" onChange={handleRegister} isInvalid={!!validationError.telpon} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.telpon}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="aset_tanah">
                                            <Form.Label>Aset Tanah</Form.Label>
                                            <Form.Control type="text" placeholder="Aset Tanah" name="aset_tanah" onChange={handleRegister} isInvalid={!!validationError.aset_tanah} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.aset_tanah}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="nm_pemilik">
                                            <Form.Label>Nama Pemilik</Form.Label>
                                            <Form.Control type="text" placeholder="Nama Pemilik" name="nm_pemilik" onChange={handleRegister} isInvalid={!!validationError.nm_pemilik} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.nm_pemilik}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="password">
                                            <Form.Label>Password Akun</Form.Label>
                                            <Form.Control type="password" placeholder="Password Akun" name="password" onChange={handleRegister} isInvalid={!!validationError.password} />
                                            <Form.Control.Feedback type="invalid">
                                                {validationError.password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                {
                                    error ? (
                                        <Alert key="danger" variant="danger">{error}</Alert>
                                    ) : ''
                                }
                                <Button variant="success" type="submit">Daftar</Button>
                            </Form>
                        </Col>
                    </Row>
                
                )
            }
        </Container>

        </>
    );
}