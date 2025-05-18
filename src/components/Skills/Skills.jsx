import React, { useEffect, useRef } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import styles from './Skills.module.css';
import { getAllSkills } from '../../services/skillsService';
import useFetch from '../../hooks/useFetch';

const Skills = () => {
  const skillsRef = useRef(null);
  const { updatePageTitle } = usePageTitle();
  const { data: apiSkills, loading, error } = useFetch(getAllSkills);

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
    <section id="skills" ref={skillsRef} className={styles.skillsSection}>
      <h2 className={styles.heading}>Technical Skills</h2>
      {loading && <p>Loading skills...</p>}
      {error && <p>Error loading skills: {error}</p>}
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
