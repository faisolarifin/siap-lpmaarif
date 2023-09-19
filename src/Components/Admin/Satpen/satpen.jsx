import React, {useState, useEffect} from "react";
import { Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Verifikasi from "./verifikasi";

export default function Satpen() {

    const [key, setKey] = useState('home');

    return (
        <div className="container-begin">
            <Container fluid>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>

                <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-4"
                >
                    <Tab eventKey="home" title="Verifikasi">
                        <Verifikasi />
                    </Tab>
                    <Tab eventKey="profile" title="Proses Dokumen">
                        {/* <Sonnet /> */}
                    </Tab>
                    <Tab eventKey="contact" title="Rekap Satpen">
                        {/* <Sonnet /> */}
                    </Tab>
                </Tabs>

            </Container>    
        </div>

    );
}