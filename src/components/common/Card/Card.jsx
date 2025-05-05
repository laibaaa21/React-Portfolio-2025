import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  image, 
  title, 
  description, 
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`${styles.card} ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt={title} 
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Card; 