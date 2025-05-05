import React from 'react';
import './Projects.css';
import chessImg from '../../assets/chessGame.png';
import gomokuImg from '../../assets/gomokuGame.png';
import helicopterImg from '../../assets/helicopterGame.jpg';
import scavengerImg from '../../assets/scavHunt.png';

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      
      <div className="project-categories">Programming Fundamentals</div>
      <div className="projects-container">
        <div className="project-card">
          <img src={chessImg} alt="Chess Game" className="project-image" />
          <div className="project-info">
            <h3 className="project-title">Chess Game</h3>
            <p className="project-description">
              Developed a two-player chess game with legal move validation and graphics.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={gomokuImg} alt="Gomoku Game" className="project-image" />
          <div className="project-info">
            <h3 className="project-title">Gomoku Game</h3>
            <p className="project-description">
              A strategy-based board game. Implemented win-checking logic & AI opponent.
            </p>
          </div>
        </div>
      </div>

      <div className="project-categories">Game Development</div>
      <div className="projects-container">
        <div className="project-card">
          <img src={helicopterImg} alt="Helicopter Game" className="project-image" />
          <div className="project-info">
            <h3 className="project-title">Helicopter Game</h3>
            <p className="project-description">
              Designed a player-controlled helicopter game where the player rescues people.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={scavengerImg} alt="Scavenger Hunt" className="project-image" />
          <div className="project-info">
            <h3 className="project-title">Scavenger Hunt</h3>
            <p className="project-description">
              Created a 2D interactive scavenger hunt game in Unity with a shop to buy extra lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
