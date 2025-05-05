import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { name: 'Unity', percentage: 80 },
    { name: 'OpenCV', percentage: 60 },
    { name: 'Adobe Photoshop', percentage: 90 },
    { name: 'Audacity', percentage: 100 },
    { name: 'Problem Solving', percentage: 85 },
    { name: 'Adaptability', percentage: 100 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = document.querySelectorAll('.skill-bar');
            bars.forEach((bar) => bar.classList.add('animate'));
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

  return (
    <section id="skills" ref={skillsRef}>
      <h2 className="skills-heading">Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ '--skill-percentage': `${skill.percentage}%` }}
              >
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
