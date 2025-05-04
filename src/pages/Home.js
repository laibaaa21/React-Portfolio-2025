// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import profileImg from '../../assets/profile.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Laiba Saqlain</h2>
        <p>Email: <a href="mailto:laibasaqlain92@gmail.com">laibasaqlain92@gmail.com</a></p>
        <p>Phone: 1902-19293737</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="navbar">
          <h1>Laiba's Portfolio</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-section">
          <img className="profile-img" src={profileImg} alt="Laiba Saqlain" />
          <h1>Hi, I'm <em><strong>Laiba Saqlain</strong></em></h1>
          <h3>
            <span className="highlight">Computer Science Student</span> | 
            <span className="highlight"> Game Dev Enthusiast</span> | 
            <span className="highlight"> UI/UX Designer</span>
          </h3>
          <button className="hire-button">HIRE ME</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
