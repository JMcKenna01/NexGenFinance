import React from 'react';
import { Link } from 'react-router-dom';
import LogoutBtn from '../utils/LogoutBtn'; // Adjust the path as needed
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
      <LogoutBtn />
    </nav>
  );
};

export default Navbar;
