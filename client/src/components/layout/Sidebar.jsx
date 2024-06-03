import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Home
      </NavLink>
      {/* Add other links */}
    </nav>
  );
};

export default Sidebar;
