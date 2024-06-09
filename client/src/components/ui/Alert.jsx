import React from 'react';
import PropTypes from 'prop-types';
import styles from './Alert.module.css';

const Alert = ({ type, message }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
