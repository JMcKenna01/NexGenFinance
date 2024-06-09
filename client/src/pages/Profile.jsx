import React from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './Profile.module.css';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const GET_PROFILE_DATA = gql`
  query GetProfileData {
    user {
      id
      name
      email
      totalIncome
      totalExpenses
      totalInvestments
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE_DATA);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching profile data</div>;

  return (
    <div className={styles.profile}>
      <Navbar />
      <header className={styles.header}>
        <h1>Profile</h1>
      </header>
      <section className={styles.details}>
        <div className={styles.detail}>
          <h2>Name</h2>
          <p>{data.user.name}</p>
        </div>
        <div className={styles.detail}>
          <h2>Email</h2>
          <p>{data.user.email}</p>
        </div>
        <div className={styles.detail}>
          <h2>Total Income</h2>
          <p>${data.user.totalIncome}</p>
        </div>
        <div className={styles.detail}>
          <h2>Total Expenses</h2>
          <p>${data.user.totalExpenses}</p>
        </div>
        <div className={styles.detail}>
          <h2>Total Investments</h2>
          <p>${data.user.totalInvestments}</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
