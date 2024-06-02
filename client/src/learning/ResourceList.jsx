import React from 'react';
import PropTypes from 'prop-types';
import ResourceItem from './ResourceItem';
import styles from './ResourceList.module.css';

const ResourceList = ({ resources }) => {
  return (
    <div className={styles.ResourceList}>
      <h2>Learning Resources</h2>
      <ul>
        {resources.map(resource => (
          <ResourceItem key={resource.id} resource={resource} />
        ))}
      </ul>
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
