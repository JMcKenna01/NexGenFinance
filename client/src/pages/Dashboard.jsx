import React, { useState } from 'react';
import Alert from '../ui/Alert';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../ui/Button';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const [alert, setAlert] = useState(null);

  const triggerAlert = () => {
    setAlert({ type: 'success', message: 'This is a success message!' });
    setTimeout(() => setAlert(null), 3000); // Clear the alert after 3 seconds
  };

  return (
    <div className={styles.dashboard}>
      <Navbar />
      <div className={styles.dashboardContainer}>
        <h1>Dashboard</h1>
        {alert && <Alert type={alert.type} message={alert.message} />}
        <Button text="Trigger Alert" onClick={triggerAlert} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
