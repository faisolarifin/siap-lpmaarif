import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.access_token);
  };

  const deleteToken = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return {
    setToken: saveToken,
    deleteToken: deleteToken,
    token
  }
}
