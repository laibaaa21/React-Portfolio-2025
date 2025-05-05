import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.copyright}>
          &copy; {currentYear} Laiba Saqlain. All rights reserved.
        </p>
        <p className={styles.footerMessage}>
          Built with React
        </p>
      </div>
    </footer>
  );
};

export default Footer; 