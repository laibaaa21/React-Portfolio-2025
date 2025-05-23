// src/components/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import './Home.css';
import profileImg from '../../assets/profile.jpg';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../context/ThemeContext';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsSidebarOpen(true);
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
  }, [theme]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className={`home-container ${theme}`}>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? '×' : '☰'}
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <h2>Laiba Saqlain</h2>
        <p>Email: <a href="mailto:laibasaqlain92@gmail.com">laibasaqlain92@gmail.com</a></p>
        <p>Phone: 1902-19293737</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="navbar">
          <h1>Laiba's Portfolio</h1>
          {isMobile && (
            <button
              className="nav-toggle"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? '×' : '☰'}
            </button>
          )}
          <nav className={`nav-menu ${isNavOpen ? 'open' : ''}`}>
            <a href="#" onClick={scrollToTop}>Home</a>
            <a href="#education" onClick={() => isMobile && setIsNavOpen(false)}>Education</a>
            <a href="#projects" onClick={() => isMobile && setIsNavOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => isMobile && setIsNavOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => isMobile && setIsNavOpen(false)}>Contact</a>
          </nav>
        </header>

        <div className="hero-section">
          <div className="hero-content">
            <img className="profile-img" src={profileImg} alt="Laiba Saqlain" />
            <div className="name-container">
              <h1>Hi, I'm</h1>
              <h1><em><strong>Laiba Saqlain</strong></em></h1>
            </div>
            <h3>
              <span className="highlight">Computer Science Student</span> |
              <span className="highlight">Game Dev Enthusiast</span> |
              <span className="highlight">UI/UX Designer</span>
            </h3>
            <a href="#contact">
              <button className="hire-button">HIRE ME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
