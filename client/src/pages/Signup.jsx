import React from 'react';
import SignupForm from '../components/forms/signUpForm';
import './SignUp.module.css'; 

const Signup = () => {
  const handleSignup = (credentials) => {
    console.log('Signup credentials:', credentials);
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
