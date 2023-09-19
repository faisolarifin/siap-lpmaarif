import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from "./Helpers/usetoken";
import useAccess from "./Helpers/useaccess";

import Login from './Components/User/Auth/login';
import LogoutUser from './Pages/User/logout';
import UserSatpen from './Pages/User/satpen';
import Register from './Pages/User/register';
import SuccessRegister from './Pages/User/successregister';

import LoginAdmin from './Components/Admin/Auth/login';
import Logout from './Pages/Admin/logout';
import Satpen from './Pages/Admin/satpen';
import Rekapsatpen from './Pages/Admin/rekapsatpen';


function App() {

  const {token, setToken, deleteToken} = useToken();
  const {access, setAccess, deleteAccess} = useAccess();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register token={token} />} />
          <Route path='/register/success' element={<SuccessRegister />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/logout' element={<LogoutUser token={token} deleteToken={deleteToken} />} />
          <Route path='/u/auth' element={<LoginAdmin setToken={setToken} setAccess={setAccess} />} />
          <Route path='/u/logout' element={<Logout token={token} deleteToken={deleteToken} deleteAccess={deleteAccess} />} />
        </Routes>
        {
        !access && access !== "admin" ? (
            <Routes>
              <Route path='/' element={<p>Home</p>} />
              <Route path='/profile' element={<UserSatpen token={token} />} />
            </Routes>

          ) : 
          (
            <Routes>
              <Route path='/satpen' element={<Satpen token={token} access={access} />} />
              <Route path='/rekapsatpen' element={<Rekapsatpen />} />
            </Routes>
          )
        }
      </BrowserRouter>
    </div>    
  );
}

export default App;
