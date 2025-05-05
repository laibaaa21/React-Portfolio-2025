import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Education.module.css';

const Education = () => {
  const { updatePageTitle } = usePageTitle();
  
  useEffect(() => {
    updatePageTitle('Education');
  }, [updatePageTitle]);
  
  return (
    <section id="education" className={styles.educationSection}>
      <h2 className={styles.heading}>Education Background</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Degree</th>
            <th className={styles.tableHeader}>Institution</th>
            <th className={styles.tableHeader}>Year</th>
            <th className={styles.tableHeader}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>
              <span className={styles.bsHighlight}>BS</span> Computer Science
            </td>
            <td className={`${styles.tableCell} ${styles.institutionText}`}>
              Information Technology University
            </td>
            <td className={`${styles.tableCell} ${styles.yearText}`}>
              2022 - Present
            </td>
            <td className={`${styles.tableCell} ${styles.detailsText}`}>
              Current CGPA: 3.4
            </td>
          </tr>
          <tr className={`${styles.tableRow} ${styles.tableRowEven}`}>
            <td className={styles.tableCell}>A-Levels</td>
            <td className={`${styles.tableCell} ${styles.institutionText}`}>
              Lahore Grammar School
            </td>
            <td className={`${styles.tableCell} ${styles.yearText}`}>
              2020 - 2022
            </td>
            <td className={`${styles.tableCell} ${styles.detailsText}`}>
              Math (A), Physics (B), IT (B)
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>O-Levels</td>
            <td className={`${styles.tableCell} ${styles.institutionText}`}>
              AES
            </td>
            <td className={`${styles.tableCell} ${styles.yearText}`}>
              2018 - 2020
            </td>
            <td className={`${styles.tableCell} ${styles.detailsText}`}>
              Grades: 7A*, 1A
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
