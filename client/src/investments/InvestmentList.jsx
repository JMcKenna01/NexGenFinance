import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import InvestmentItem from './InvestmentItem';

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
          <InvestmentItem key={investment.id} investment={investment} />
        ))}
      </ul>
    </div>
  );
};

export default InvestmentList;
