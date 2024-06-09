import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const ADD_INVESTMENT = gql`
  mutation AddInvestment($input: AddInvestmentInput!) {
    addInvestment(input: $input) {
      id
      name
      type
      currentValue
      initialInvestment
      date
      description
    }
  }
`;

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    currentValue: '',
    initialInvestment: '',
    date: '',
    description: '',
  });

  const history = useHistory();
  const [addInvestment] = useMutation(ADD_INVESTMENT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInvestment({ variables: { input: formData } });
      history.push('/investments');
    } catch (error) {
      console.error('Error adding investment:', error);
    }
  };

  return (
    <div>
      <h2>Add New Investment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Current Value</label>
          <input
            type="number"
            name="currentValue"
            value={formData.currentValue}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Investment</button>
      </form>
    </div>
  );
};

export default InvestmentForm;
