import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <NavLink to="/" className={styles.logoLink}>NexGenFinance</NavLink>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/dashboard" activeClassName={styles.activeLink} className={styles.navLink}>Dashboard</NavLink>
        <NavLink to="/profile" activeClassName={styles.activeLink} className={styles.navLink}>Profile</NavLink>
        <NavLink to="/transactions" activeClassName={styles.activeLink} className={styles.navLink}>Transactions</NavLink>
        <NavLink to="/goals" activeClassName={styles.activeLink} className={styles.navLink}>Goals</NavLink>
        <NavLink to="/investments" activeClassName={styles.activeLink} className={styles.navLink}>Investments</NavLink>
        <NavLink to="/budget" activeClassName={styles.activeLink} className={styles.navLink}>Budget</NavLink>
        <NavLink to="/about" activeClassName={styles.activeLink} className={styles.navLink}>About</NavLink>
        <NavLink to="/contact" activeClassName={styles.activeLink} className={styles.navLink}>Contact</NavLink>
      </nav>
      <div className={styles.user}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Welcome, User</span>
        </div>
        <NavLink to="/login" className={styles.logoutLink}>Logout</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
