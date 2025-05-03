import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>Chess Game</h3>
        <p>Developed a two-player chess game with legal move validation and graphics.</p>
      </div>
      <div>
        <h3>Gomoku Game</h3>
        <p>A strategy-based board game. Implemented win-checking logic & AI opponent</p>
      </div>
    </section>
  );
};

export default Projects;
