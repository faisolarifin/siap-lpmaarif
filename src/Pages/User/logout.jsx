import { useNavigate } from "react-router-dom";
import apiClient from "../../Helpers/apiclientuser";
import {useEffect} from "react";

export default function Logout ({token, deleteToken}) {

    const navigate = useNavigate();

    /**
    * Authorization   
    **/
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [navigate])
    
    apiClient.post("/logout", null,
    {
        headers : {
            "Authorization" : "Bearer " + token
        }
    }).then((res) => {
        deleteToken()
        navigate("/login");
    });

}