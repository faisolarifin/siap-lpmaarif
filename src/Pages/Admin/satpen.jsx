import React, {useState, useEffect} from "react";
import Layout from '../../Layouts/adminlayout';
import Satpen from '../../Components/Admin/Satpen/satpen';
import { useNavigate } from "react-router-dom";
import {useraccess} from "../../Utils/settings";

export default function SatpenPages({token, access}) {

    const navigate = useNavigate();

    /**
    * Authorization   
    **/
    useEffect(() => {
        if (!token || access !== useraccess) {
            navigate("/login");
        }
    }, [navigate])

    return (
        <Layout>
            <Satpen />
        </Layout>
    );
}