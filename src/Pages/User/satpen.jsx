import React, {useState, useEffect} from "react";
import Layout from '../../Layouts/userlayout';
import { useNavigate } from "react-router-dom";
import Satpen from '../../Components/User/Profile/satpen';

export default function SatpenPages({token}) {

    const navigate = useNavigate();

    /**
    * Authorization   
    **/
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [navigate])

    return (
        <Layout>
            <Satpen token={token} />
        </Layout>
    );
}