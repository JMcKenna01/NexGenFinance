import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './Home.module.css';
import Button from '../components/ui/Button';

const GET_HOME_DATA = gql`
  query GetHomeData {
    welcomeMessage
    userStatistics {
      totalIncome
      totalExpenses
      totalInvestments
    }
    budgets {
      category
      limit
      currentSpend
    }
    financialGoals {
      goal
      progress
    }
    investments {
      type
      amount
      date
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching home data:", error.networkError || error.message);
    return <div>Error fetching home data: {error.message}</div>;
  }

  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
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
            <img src="/images/income.png" alt="Total Income" />
          </div>
          <div className={styles.feature}>
            <h2>Total Expenses</h2>
            <p>${data.userStatistics.totalExpenses}</p>
            <img src="/images/expenses.png" alt="Total Expenses" />
          </div>
          <div className={styles.feature}>
            <h2>Total Investments</h2>
            <p>${data.userStatistics.totalInvestments}</p>
            <img src="/images/investments.png" alt="Total Investments" />
          </div>
        </section>
        <section className={styles.additionalInfo}>
          <div className={styles.goals}>
            <h2>Financial Goals</h2>
            {data.financialGoals.map((goal, index) => (
              <div key={index} className={styles.goalItem}>
                <h3>{goal.goal}</h3>
                <p>Progress: {goal.progress}%</p>
                <img src="/images/goal.png" alt="Goal" />
              </div>
            ))}
          </div>
          <div className={styles.budgets}>
            <h2>Budgets</h2>
            {data.budgets.map((budget, index) => (
              <div key={index} className={styles.budgetItem}>
                <h3>{budget.category}</h3>
                <p>Limit: ${budget.limit}</p>
                <p>Current Spend: ${budget.currentSpend}</p>
                <img src="/images/budget.png" alt="Budget" />
              </div>
            ))}
          </div>
          <div className={styles.investments}>
            <h2>Investments</h2>
            {data.investments.map((investment, index) => (
              <div key={index} className={styles.investmentItem}>
                <h3>{investment.type}</h3>
                <p>Amount: ${investment.amount}</p>
                <p>Date: {new Date(investment.date).toLocaleDateString()}</p>
                <img src="/images/investment.png" alt="Investment" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;