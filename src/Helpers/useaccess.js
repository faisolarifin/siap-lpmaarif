import { useState } from 'react';

export default function useAccess() {
  const getAccess = () => {
    const accessString = localStorage.getItem('access');
    return accessString;
  };

  const [access, setAccess] = useState(getAccess());

  const saveAccess = userAccess => {
    localStorage.setItem('access', userAccess);
    setAccess(userAccess);
  };

  const deleteAccess = () => {
    localStorage.removeItem('access');
    setAccess('');
  };


  return {
    access,
    setAccess: saveAccess,
    deleteAccess: deleteAccess,
  }
}
