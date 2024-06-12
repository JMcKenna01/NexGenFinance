import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/path-to-your-logo.png" alt="NexGenFinance Logo" className={styles.logo} />
        <h1 className={styles.title}>NexGenFinance</h1>
      </div>
      <nav className={styles.nav}>
        {isAuthenticated ? (
          <LogoutBtn onLogout={handleLogout} />
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
