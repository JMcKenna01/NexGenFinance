import React from 'react';
import { Link } from 'react-router-dom';

const InvestmentItem = ({ investment }) => {
  return (
    <li>
      <Link to={`/investments/${investment.id}`}>
        <h3>{investment.name}</h3>
      </Link>
      <p>Type: {investment.type}</p>
      <p>Current Value: ${investment.currentValue.toFixed(2)}</p>
      <p>Initial Investment: ${investment.initialInvestment.toFixed(2)}</p>
      <p>Date: {new Date(investment.date).toLocaleDateString()}</p>
    </li>
  );
};

export default InvestmentItem;
