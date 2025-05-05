// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import Home from '../components/Home/Home';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { usePageTitle } from '../context/PageTitleContext';
import './HomePage.css'; // We'll create this next

const HomePage = () => {
  const { updatePageTitle } = usePageTitle();
  
  useEffect(() => {
    updatePageTitle('Home');
  }, [updatePageTitle]);
  
  return (
    <>
      <Home />
      <div className="content-sections">
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
