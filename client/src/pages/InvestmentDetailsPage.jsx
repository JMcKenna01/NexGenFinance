import React from 'react';
import InvestmentDetails from '../investments/InvestmentDetails'; // Adjust path if needed
import styles from './InvestmentDetailsPage.module.css';

const InvestmentDetailsPage = ({ match }) => {
  const { id } = match.params;

  return (
    <div className={styles.investmentDetailsPage}>
      <InvestmentDetails investmentId={id} />
    </div>
  );
};

export default InvestmentDetailsPage;
