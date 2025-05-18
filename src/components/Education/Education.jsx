import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageTitle } from '../../context/PageTitleContext';
import { useAuth } from '../../context/AuthContext';
import styles from './Education.module.css';
import { getAllEducation } from '../../services/educationService';
import useFetch from '../../hooks/useFetch';

const Education = () => {
  const { updatePageTitle } = usePageTitle();
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [retryCount, setRetryCount] = useState(0);
  const { data: education, loading, error, refetch } = useFetch(getAllEducation, [retryCount]);

  useEffect(() => {
    updatePageTitle('Education');
  }, [updatePageTitle]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const handleRetry = () => {
    setRetryCount(prevCount => prevCount + 1);
  };

  const handleManageEducation = () => {
    navigate('/admin');
  };

  const renderError = () => (
    <div className={styles.errorContainer}>
      <p className={styles.error}>
        <span className={styles.errorIcon}>⚠️</span>
        Unable to load education data.
      </p>
      <button className={styles.retryButton} onClick={handleRetry}>
        Try Again
      </button>
    </div>
  );

  return (
    <section id="education" className={styles.educationSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>Education Background</h2>

        {/* Admin Controls - Only visible when logged in as admin */}
        {isAuthenticated && isAdmin() && (
          <button
            className={styles.adminButton}
            onClick={handleManageEducation}
          >
            Manage Education
          </button>
        )}
      </div>

      {loading && (
        <div className={styles.loadingContainer}>
          <p className={styles.loading}>Loading education data...</p>
        </div>
      )}

      {error && renderError()}

      {!loading && !error && education && education.length > 0 ? (
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
            {education.map((item, index) => (
              <tr key={item._id} className={`${styles.tableRow} ${index % 2 !== 0 ? styles.tableRowEven : ''}`}>
                <td className={styles.tableCell}>
                  <span className={styles.bsHighlight}>{item.degree.split(' ')[0]}</span> {item.degree.split(' ').slice(1).join(' ')}
                </td>
                <td className={`${styles.tableCell} ${styles.institutionText}`}>
                  {item.institution}
                </td>
                <td className={`${styles.tableCell} ${styles.yearText}`}>
                  {formatDate(item.startDate)} - {item.current ? 'Present' : formatDate(item.endDate)}
                </td>
                <td className={`${styles.tableCell} ${styles.detailsText}`}>
                  {item.description || (item.gpa ? `GPA: ${item.gpa}` : '')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : !loading && !error ? (
        <div className={styles.fallbackContent}>
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
        </div>
      ) : null}
    </section>
  );
};

export default Education;
