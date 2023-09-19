import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://siap-lpmaarif-backend.test/api/v1/",
    headers : {
        "Accept" : "*/*",
        "X-Date" : "timestamp",
        "X-Signature" : "randomkey",
        "X-Requestor" : "siaplpmaarif",
        "Content-Type" : "application/json;charset=utf-8",
    }
});
 
export default apiClient;