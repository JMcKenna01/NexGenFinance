import React from 'react';
import styles from './Home.module.css';
import Button from '../ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to NexGenFinance</h1>
          <p>Take control of your finances with ease. Track your income, expenses, and investments all in one place.</p>
          <Button text="Get Started" onClick={() => { /* Add navigation logic here */ }} />
        </div>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Track Your Budget</h2>
          <p>Monitor your spending habits and stay on top of your budget with our easy-to-use tools.</p>
        </div>
        <div className={styles.feature}>
          <h2>Set Financial Goals</h2>
          <p>Plan for the future by setting and achieving your financial goals.</p>
        </div>
        <div className={styles.feature}>
          <h2>Manage Investments</h2>
          <p>Keep track of your investments and analyze their performance with detailed insights.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
