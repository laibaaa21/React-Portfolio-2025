import React, { useEffect, useRef, useState } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { useTheme } from '../../context/ThemeContext';
import styles from './Skills.module.css';
import { getAllSkills } from '../../services/skillsService';
import useFetch from '../../hooks/useFetch';

const Skills = () => {
  const skillsRef = useRef(null);
  const { updatePageTitle } = usePageTitle();
  const { theme } = useTheme();
  const [retryCount, setRetryCount] = useState(0);
  const { data: apiSkills, loading, error, refetch } = useFetch(getAllSkills, [retryCount]);

  const defaultSkills = [
    { name: 'Unity', percentage: 80 },
    { name: 'OpenCV', percentage: 60 },
    { name: 'Adobe Photoshop', percentage: 90 },
    { name: 'Audacity', percentage: 100 },
    { name: 'Problem Solving', percentage: 85 },
    { name: 'Adaptability', percentage: 100 },
  ];

  useEffect(() => {
    updatePageTitle('Skills');
  }, [updatePageTitle]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = document.querySelectorAll(`.${styles.bar}`);
            bars.forEach((bar) => bar.classList.add(styles.animate));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Force re-animation when theme changes
  useEffect(() => {
    const bars = document.querySelectorAll(`.${styles.bar}`);

    // Remove animation class
    bars.forEach(bar => bar.classList.remove(styles.animate));

    // Force reflow
    void skillsRef.current?.offsetWidth;

    // Add animation class back
    setTimeout(() => {
      bars.forEach(bar => bar.classList.add(styles.animate));
    }, 50);
  }, [theme]);

  const handleRetry = () => {
    setRetryCount(prevCount => prevCount + 1);
  };

  const renderError = () => (
    <div className={styles.errorContainer}>
      <p className={styles.error}>
        <span className={styles.errorIcon}>⚠️</span>
        Unable to load skills data.
      </p>
      <button className={styles.retryButton} onClick={handleRetry}>
        Try Again
      </button>
    </div>
  );

  // Convert API skills to the format needed for display
  const skills = apiSkills && apiSkills.length > 0
    ? apiSkills.map(skill => ({
      name: skill.name,
      percentage: skill.level === 'Expert' ? 100 :
        skill.level === 'Advanced' ? 85 :
          skill.level === 'Intermediate' ? 60 : 30
    }))
    : defaultSkills;

  return (
    <section id="skills" ref={skillsRef} className={`${styles.skillsSection} ${theme}-theme`}>
      <h2 className={styles.heading}>Technical Skills</h2>

      {loading && (
        <div className={styles.loadingContainer}>
          <p className={styles.loading}>Loading skills data...</p>
        </div>
      )}

      {error && renderError()}

      <div className={styles.container}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.barContainer}>
              <div
                className={styles.bar}
                style={{ '--skill-percentage': `${skill.percentage}%` }}
              >
                <span className={styles.percentage}>{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
