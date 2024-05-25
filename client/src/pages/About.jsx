import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Navbar />
      <div className={styles.aboutContainer}>
        <h1>About NexGenFinance</h1>
        <p>
          Welcome to NexGenFinance, your all-in-one financial management tool. Our mission is to help you take control of your finances by providing easy-to-use tools for tracking your income, expenses, and investments.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Budget Management: Monitor your spending habits and stay on top of your budget.</li>
          <li>Financial Goals: Set and achieve financial goals for a secure future.</li>
          <li>Investment Tracking: Keep track of your investments and analyze their performance.</li>
          <li>Learning Resources: Access a wealth of financial literacy resources.</li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          At NexGenFinance, we believe that everyone should have the tools and knowledge to manage their finances effectively. Our goal is to empower users to make informed financial decisions and achieve financial freedom.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
