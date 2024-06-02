import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_GOALS = gql`
  query GetGoals {
    goals {
      id
      title
      targetAmount
      currentAmount
      deadline
    }
  }
`;

const GoalsManager = () => {
  const { loading, error, data } = useQuery(GET_GOALS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Goals Manager</h2>
      <ul>
        {data.goals.map(goal => (
          <li key={goal.id}>
            <h3>{goal.title}</h3>
            <p>Target Amount: ${goal.targetAmount}</p>
            <p>Current Amount: ${goal.currentAmount}</p>
            <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsManager;
