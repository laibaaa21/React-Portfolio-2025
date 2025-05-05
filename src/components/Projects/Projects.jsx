import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import Card from '../common/Card/Card';
import styles from './Projects.module.css';
import chessImg from '../../assets/chessGame.png';
import gomokuImg from '../../assets/gomokuGame.png';
import helicopterImg from '../../assets/helicopterGame.jpg';
import scavengerImg from '../../assets/scavHunt.png';

const Projects = () => {
  const { updatePageTitle } = usePageTitle();
  
  useEffect(() => {
    updatePageTitle('Projects');
  }, [updatePageTitle]);
  
  const handleProjectClick = (projectName) => {
    console.log(`Clicked on project: ${projectName}`);
    // Here you could add functionality to show project details
  };
  
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.heading}>Projects</h2>
      
      <div className={styles.categories}>Programming Fundamentals</div>
      <div className={styles.projectsContainer}>
        <Card 
          image={chessImg}
          title="Chess Game"
          description="Developed a two-player chess game with legal move validation and graphics."
          onClick={() => handleProjectClick('Chess Game')}
        />

        <Card 
          image={gomokuImg}
          title="Gomoku Game"
          description="A strategy-based board game. Implemented win-checking logic & AI opponent."
          onClick={() => handleProjectClick('Gomoku Game')}
        />
      </div>

      <div className={styles.categories}>Game Development</div>
      <div className={styles.projectsContainer}>
        <Card 
          image={helicopterImg}
          title="Helicopter Game"
          description="Designed a player-controlled helicopter game where the player rescues people."
          onClick={() => handleProjectClick('Helicopter Game')}
        />

        <Card 
          image={scavengerImg}
          title="Scavenger Hunt"
          description="Created a 2D interactive scavenger hunt game in Unity with a shop to buy extra lives."
          onClick={() => handleProjectClick('Scavenger Hunt')}
        />
      </div>
    </section>
  );
};

export default Projects;
