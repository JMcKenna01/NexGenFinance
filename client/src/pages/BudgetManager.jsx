import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_BUDGETS = gql`
  query GetBudgets {
    budgets {
      id
      category
      allocatedAmount
      spentAmount
      month
    }
  }
`;

const BudgetManager = () => {
  const { loading, error, data } = useQuery(GET_BUDGETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Budget Manager</h2>
      <ul>
        {data.budgets.map(budget => (
          <li key={budget.id}>
            <h3>{budget.category}</h3>
            <p>Allocated Amount: ${budget.allocatedAmount}</p>
            <p>Spent Amount: ${budget.spentAmount}</p>
            <p>Month: {new Date(budget.month).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetManager;