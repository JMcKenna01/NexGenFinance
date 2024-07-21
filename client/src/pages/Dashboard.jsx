import React from 'react';
import styles from './Dashboard.module.css'; // Adjust the path if necessary

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Welcome to NexGenFinance!</h1>
        <p>Take control of your finances with ease. Track your income, expenses, and investments all in one place.</p>
        <div className={styles.actions}>
          <a href="/signup" className={styles.btnPrimary}>Sign Up</a>
          <a href="/login" className={styles.btnSecondary}>Log In</a>
        </div>
      </div>
      <div className={styles.news}>
        <h2>Latest Updates</h2>
        <div className={styles.newsItem}>
          <p>NexGenFinance launches new investment tracking feature!</p>
        </div>
        <div className={styles.newsItem}>
          <p>Upcoming webinar: How to maximize your savings.</p>
        </div>
        <div className={styles.newsItem}>
          <p>Read our latest blog post on financial planning for beginners.</p>
        </div>
      </div>
      <div className={styles.testimonials}>
        <h2>Testimonials</h2>
        <div className={styles.testimonial}>
          <p>"NexGenFinance has completely transformed how I manage my finances!" - Jane D.</p>
        </div>
        <div className={styles.testimonial}>
          <p>"I love the intuitive design and easy-to-use features." - John S.</p>
        </div>
        <div className={styles.testimonial}>
          <p>"The best financial app I've ever used!" - Sarah W.</p>
        </div>
      </div>
      <div className={styles.ctaSection}>
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with the latest news and features from NexGenFinance. Coming soon!</p>
        <a href="#" className={styles.btnCTA}>Notify Me</a>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </div>
        <p>&copy; 2024 NexGenFinance. All rights reserved.</p>
        <p>Developed by Joe Mckenna</p>
      </div>
    </div>
  );
};

export default Dashboard;
