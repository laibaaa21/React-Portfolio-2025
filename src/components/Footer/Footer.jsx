import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showFooter, setShowFooter] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom
      const scrolledToBottom = 
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      
      if (scrolledToBottom) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is already at bottom
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <footer className={`${styles.footer} ${showFooter ? styles.footerVisible : ''}`}>
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