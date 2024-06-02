import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResourceItem.module.css';

const ResourceItem = ({ resource }) => {
  return (
    <li className={styles.ResourceItem}>
      <h3>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          {resource.title}
        </a>
      </h3>
      <p>{resource.description}</p>
    </li>
  );
};

ResourceItem.propTypes = {
  resource: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResourceItem;
