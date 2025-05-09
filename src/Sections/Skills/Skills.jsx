import React from "react";
import styles from "./SkillsStyles.module.css";

const skillsData = [
  { name: "HTML", percentage: 96 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 75 },
  { name: "React", percentage: 70 },
  { name: "Python", percentage: 50 },
  { name: "Tailwind Css", percentage: 65 },
  { name: "java", percentage: 40 },
  { name: "Figma", percentage: 60 },
  
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer} id="skills">
      {skillsData.map((skill, index) => (
        <div className={styles.skill} key={index}>
          <div className={styles.skillName}>{skill.name}</div>
          <div className={styles.circle} data-percentage={skill.percentage}>
            <div
              className={styles.outerCircle}
              style={{
                background: `conic-gradient(blue ${skill.percentage}%, #e0e0e0 ${skill.percentage}%)`,
              }}
            >
              <div className={styles.innerCircle}>
                <span>{skill.percentage}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
