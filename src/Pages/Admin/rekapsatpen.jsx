import React, {useState, useEffect} from "react";
import Layout from '../../Layouts/adminlayout';
import RekapSatpen from '../../Components/Admin/Satpen/rekapsatpen';
import { useNavigate } from "react-router-dom";

export default function RekapSatpenPages() {


    return (
        <Layout>
            <RekapSatpen />
        </Layout>
    );
}