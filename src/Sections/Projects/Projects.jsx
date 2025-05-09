import React from 'react'
import styles from './ProjectsStyles.Module.css'
// import viberr from '../../assets/assets/viberr.png'
import Game from '../../assets/assets/art-illustration-355362837 (1).webp'
// import freshBurger from '../../assets/assets/fresh-burger.png';
import ToDoApp from '../../assets/assets/To_Do_List-512 (1).webp'
// import hipsster from '../../assets/assets/hipsster.png';
import fitLift from '../../assets/assets/fitlift.png';
import ProjectsCard from '../../Common/ProjectsCard'

function Projects() {
  return (
    <section id='Project' className={styles.container}>
        <h1 className='Section-Title'>
          Projects
        </h1>
        <div className={styles.ProjectsContainer}>
        <ProjectsCard 
        src={Game} 
        link="https://xo-battle-game.netlify.app/"
        h3='Game'
        p="Tic-Tac-Toe Game"/> 
        {/* In Link's Bracket Provide Our Project Link  */}
        <ProjectsCard
          src={ToDoApp}
          link="https://techcreation.netlify.app/" 
          h3="App"
          p="To-Do App"
          
        />
         {/* <ProjectsCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        /> */}
         <ProjectsCard
          src={fitLift}
          link=""
          h3="FitLift"
          p="Fitness App
          onworking" 
        
        />
        
        </div>
      
    </section>
  )
}

export default Projects
