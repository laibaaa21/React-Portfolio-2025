import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-body">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and skills</p>
      </header>

      <section className="profile">
        <div className="profile-img-container">
          <img src="profile-pic.jpg" alt="Profile" className="profile-img" />
        </div>
        <div className="intro">
          <h2>Hi, I'm [Your Name]</h2>
          <p>
            A passionate developer with an interest in web and game development.
          </p>
        </div>
      </section>
      
      <footer>
        <button className="hire-btn">Hire Me</button>
      </footer>
    </div>
  );
};

export default Home;
