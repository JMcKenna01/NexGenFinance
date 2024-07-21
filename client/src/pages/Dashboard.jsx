import React from 'react';
import styles from './Dashboard.module.css'; // Adjust the path if necessary

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>Welcome to NexGenFinance!</h1>
        <p>Take control of your finances with ease. Track your income, expenses, and investments all in one place.</p>
        <div className={styles.dashboardActions}>
          <a href="/signup" className={styles.dashboardBtnPrimary}>Sign Up</a>
          <a href="/login" className={styles.dashboardBtnSecondary}>Log In</a>
        </div>
      </div>
      <div className={styles.dashboardNews}>
        <h2>Latest Updates</h2>
        <div className={styles.dashboardNewsItem}>
          <p>NexGenFinance launches new investment tracking feature!</p>
        </div>
        <div className={styles.dashboardNewsItem}>
          <p>Upcoming webinar: How to maximize your savings.</p>
        </div>
        <div className={styles.dashboardNewsItem}>
          <p>Read our latest blog post on financial planning for beginners.</p>
        </div>
      </div>
      <div className={styles.dashboardTestimonials}>
        <h2>Testimonials</h2>
        <div className={styles.dashboardTestimonial}>
          <p>"NexGenFinance has completely transformed how I manage my finances!" - Jane D.</p>
        </div>
        <div className={styles.dashboardTestimonial}>
          <p>"I love the intuitive design and easy-to-use features." - John S.</p>
        </div>
        <div className={styles.dashboardTestimonial}>
          <p>"The best financial app I've ever used!" - Sarah W.</p>
        </div>
      </div>
      <div className={styles.dashboardCtaSection}>
        <h2>Subscribe to our Newsletter</h2>
        <p>Stay updated with the latest news and features from NexGenFinance. Coming soon!</p>
        <a href="#" className={styles.dashboardBtnCTA}>Notify Me</a>
      </div>
      <div className={styles.dashboardFooter}>
        <div className={styles.dashboardFooterLinks}>
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
