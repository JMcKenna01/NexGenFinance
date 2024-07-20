import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResourceList.module.css';

const ResourceList = ({ resources }) => {
  return (
    <div className={styles.resourceList}>
      {resources.map(resource => (
        <div key={resource.id} className={styles.resourceItem}>
          <a href={resource.url} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
            <div>
              <h2 className={styles.resourceTitle}>{resource.title}</h2>
              <p className={styles.resourceDescription}>{resource.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

ResourceList.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResourceList;
