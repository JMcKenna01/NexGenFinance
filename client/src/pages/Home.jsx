import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './Home.module.css';
import Button from '../ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';


const GET_HOME_DATA = gql`
  query GetHomeData {
    welcomeMessage
    userStatistics {
      totalIncome
      totalExpenses
      totalInvestments
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME_DATA, { client });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching home data</div>;
  }

  return (
    <div className={styles.home}>
      <Navbar />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{data.welcomeMessage}</h1>
          <p>Take control of your finances with ease. Track your income, expenses, and investments all in one place.</p>
          <Button text="Get Started" onClick={() => { /* Add navigation logic here */ }} />
        </div>
      </header>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Total Income</h2>
          <p>${data.userStatistics.totalIncome}</p>
        </div>
        <div className={styles.feature}>
          <h2>Total Expenses</h2>
          <p>${data.userStatistics.totalExpenses}</p>
        </div>
        <div className={styles.feature}>
          <h2>Total Investments</h2>
          <p>${data.userStatistics.totalInvestments}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
