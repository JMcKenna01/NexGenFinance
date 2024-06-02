import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogoutBtn from '../../utils/LogoutBtn';
import styles from './Navbar.module.css';

const Navbar = () => {
  const history = useHistory();
  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => history.push('/')}>
        NexGenFinance
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/goals">Goals</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
      </ul>
      <div className={styles.authLinks}>
        {isLoggedIn ? (
          <LogoutBtn />
        ) : (
          <>
            <Link to="/login" className={styles.loginLink}>Login</Link>
            <Link to="/signup" className={styles.signupLink}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
