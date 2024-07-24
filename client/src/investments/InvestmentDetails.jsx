import React from 'react';
import PropTypes from 'prop-types';
import styles from './InvestmentDetails.module.css';

const InvestmentDetails = ({ investmentId }) => {
  // Placeholder for fetching investment details using the investmentId

  return (
    <div className={styles.investmentDetails}>
      <h1>Investment Details</h1>
      {/* Add details content here */}
    </div>
  );
};

InvestmentDetails.propTypes = {
  investmentId: PropTypes.string.isRequired,
};

export default InvestmentDetails;
