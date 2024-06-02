import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_INVESTMENTS = gql`
  query GetInvestments {
    investments {
      id
      name
      type
      currentValue
      initialInvestment
      date
    }
  }
`;

const InvestmentList = () => {
  const { loading, error, data } = useQuery(GET_INVESTMENTS);
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    if (data) {
      setInvestments(data.investments);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Investment List</h2>
      <ul>
        {investments.map(investment => (
          <li key={investment.id}>
            <Link to={`/investments/${investment.id}`}>
              <h3>{investment.name}</h3>
            </Link>
            <p>Type: {investment.type}</p>
            <p>Current Value: ${investment.currentValue.toFixed(2)}</p>
            <p>Initial Investment: ${investment.initialInvestment.toFixed(2)}</p>
            <p>Date: {new Date(investment.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentList;
