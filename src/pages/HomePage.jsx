// src/pages/HomePage.jsx
import React from 'react';
import Home from '../components/Home/Home';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import './HomePage.css'; // We'll create this next

const HomePage = () => {
  return (
    <>
      <Home />
      <div className="content-sections">
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
