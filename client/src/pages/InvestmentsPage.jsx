import React, { useState, useEffect } from 'react';
import InvestmentForm from '../components/forms/InvestmentForm';
import InvestmentList from '../investments/InvestmentList';
import styles from './InvestmentsPage.module.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    const storedInvestments = JSON.parse(localStorage.getItem('investments')) || [];
    setInvestments(storedInvestments);
  }, []);

  useEffect(() => {
    localStorage.setItem('investments', JSON.stringify(investments));
  }, [investments]);

  const addInvestment = (investment) => {
    setInvestments([...investments, investment]);
  };

  const editInvestment = (updatedInvestment) => {
    const updatedInvestments = investments.map((inv) =>
      inv.id === updatedInvestment.id ? updatedInvestment : inv
    );
    setInvestments(updatedInvestments);
  };

  const deleteInvestment = (id) => {
    setInvestments(investments.filter((investment) => investment.id !== id));
  };

  const calculateTotalInvested = () => {
    if (selectedType === 'All') {
      return investments.reduce((total, inv) => total + inv.amount, 0);
    }
    return investments
      .filter((inv) => inv.type === selectedType)
      .reduce((total, inv) => total + inv.amount, 0);
  };

  const chartData = {
    labels: investments.map((inv) => new Date(inv.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Investment Growth',
        data: investments.map((inv) => inv.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className={styles.investmentsPageContainer}>
      <div className={styles.header}>
        <h2>Total Invested: ${calculateTotalInvested().toFixed(2)}</h2>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="All">All</option>
          <option value="Stocks">Stocks</option>
          <option value="Bonds">Bonds</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Mutual Funds">Mutual Funds</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <InvestmentForm onSave={addInvestment} />
      <InvestmentList investments={investments} onEdit={editInvestment} onDelete={deleteInvestment} />
      <div className={styles.chartContainer}>
        <h2>Growth Over Time</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default InvestmentsPage;
