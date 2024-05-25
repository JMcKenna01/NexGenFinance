import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../ui/Button';

const LogoutBtn = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem('token');
    // Redirect the user to the login page
    history.push('/login');
  };

  return <Button text="Logout" onClick={handleLogout} />;
};

export default LogoutBtn;
