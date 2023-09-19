import React, {useState, useEffect} from "react";
import Login from '../../Components/Admin/Auth/login';

export default function LoginPages({setToken}) {

    return (
        <Login setToken={setToken} />
    );
}