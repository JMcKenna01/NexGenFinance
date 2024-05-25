import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import styles from './Profile.module.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../ui/Button';
import client from '../ApolloClient';

const GET_PROFILE = gql`
  query GetProfile {
    profile {
      name
      email
    }
  }
`;

const UPDATE_PROFILE = gql`
  mutation UpdateProfile($name: String!, $email: String!, $password: String) {
    updateProfile(name: $name, email: $email, password: $password) {
      name
      email
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_PROFILE, { client });
  const [updateProfile] = useMutation(UPDATE_PROFILE, { client });

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (data) {
      setUser({
        name: data.profile.name,
        email: data.profile.email,
        password: '',
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ variables: user });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Failed to update profile.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching profile data</div>;
  }

  return (
    <div className={styles.profile}>
      <Navbar />
      <div className={styles.profileContainer}>
        <h1>Your Profile</h1>
        <form className={styles.profileForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <Button text="Update Profile" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
