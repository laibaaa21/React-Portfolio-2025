// src/pages/HomePage.jsx
import React from 'react';
import Home from '../components/Home/Home';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <>
      <Home />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
