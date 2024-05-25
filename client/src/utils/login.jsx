import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import styles from './Login.module.css';
import Button from '../ui/Button';

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

const Login = () => {
  const history = useHistory();
  const [login, { error }] = useMutation(LOGIN_USER);
  const [formState, setFormState] = useState({
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
      const { data } = await login({
        variables: { ...formState },
      });
      localStorage.setItem('token', data.login.token);
      history.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.login}>
      <Navbar />
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
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
          {error && <p className={styles.error}>Failed to login. Please check your credentials.</p>}
          <Button text="Login" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
