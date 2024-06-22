import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_EMAIL } from '../utils/mutations';
import styles from './Contact.module.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [sendEmail] = useMutation(SEND_EMAIL);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { data } = await sendEmail({ variables: { ...formState } });

      if (data.sendEmail) {
        setSuccessMessage('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred while sending request:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
