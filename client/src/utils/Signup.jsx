import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from './SignUp.module.css';
import Button from '../ui/Button';

const SIGNUP_USER = gql`
  mutation signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const SignUp = () => {
  const history = useHistory();
  const [signup, { error }] = useMutation(SIGNUP_USER);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...formState },
      });
      localStorage.setItem('token', data.signup.token);
      history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.signup}>
      <Navbar />
      <div className={styles.signupContainer}>
        <h1>Sign Up</h1>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className={styles.error}>Failed to sign up. Please try again.</p>}
          <Button text="Sign Up" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
