import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutBtn from '../../utils/LogoutBtn'; 
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <LogoutBtn />
    </nav>
  );
};

export default Navbar;
