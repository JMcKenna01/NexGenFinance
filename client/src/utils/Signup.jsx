import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import './SignUp.module.css';

const SIGNUP_MUTATION = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      id
      email
    }
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION);
  const navigate = useNavigate();

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
      await signUp({ variables: formData });
      navigate('/login');
    } catch (err) {
      console.error('Error signing up:', err);
    }
  };

  return (
    <div className="SignUp">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        {error && <p className="error">{error.message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
