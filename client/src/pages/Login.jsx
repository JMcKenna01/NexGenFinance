import React from 'react';
import LoginForm from '../components/forms/loginForm';
import './Login.module.css'; 

const Login = () => {
  const handleLogin = (credentials) => {
    console.log('Login credentials:', credentials);
    // Implement login logic here, e.g., call an API to authenticate the user
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
