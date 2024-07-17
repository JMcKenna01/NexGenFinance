import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const userEmail = localStorage.getItem('userEmail'); // Assuming you store the email in localStorage

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
    document.querySelector('.contentWrapper').classList.toggle('sidebarHidden', !isVisible);
  };

  return (
    <>
      <div className={`${styles.toggleButton} ${!isVisible ? styles.hiddenButton : ''}`} onClick={toggleSidebar}>
        {isVisible ? '❮' : '❯'}
      </div>
      <nav className={`${styles.sidebar} ${!isVisible ? styles.hidden : ''}`}>
        <div className={styles.profileSection}>
          <div className={styles.profileEmail}>{userEmail}</div>
        </div>
        <div className={styles.navSection}>
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
            className={styles.navLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/budget"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Budget
          </NavLink>
          <NavLink
            to="/financial"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Financial
          </NavLink>
          <NavLink
            to="/goals"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Goals
          </NavLink>
          <NavLink
            to="/investments"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Investment
          </NavLink>
          <NavLink
            to="/learning-resources"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Learning Resources
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Profile
          </NavLink>
        </div>
        <div className={styles.bottomLinks}>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.navLink)}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
