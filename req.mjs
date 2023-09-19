import axios from "axios"

axios.defaults.headers.post['Accept'] ='*/*';
axios.defaults.headers.post['X-Date'] ='timestamp';
axios.defaults.headers.post['X-Signature'] ='randomkey';
axios.defaults.headers.post['X-Requestor'] ='siaplpmaarif';
axios.defaults.headers.post['Content-Type'] ='application/json';

axios.post("http://siap-lpmaarif-admin-backend.test/api/admin/v1/logout", null,
{
    headers : {
        "Authorization" : "Bearer 191|bPDXpzQHOupCy3qJuuhLNHAxcgLCXiVUwFNCfs20"
    }
}).then((res) => {
   console.log(res.data)
});