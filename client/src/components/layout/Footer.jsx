import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} NexGenFinance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
