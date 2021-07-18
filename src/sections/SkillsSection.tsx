import { FC } from "react";

import styles from "css/skills.module.scss";
// import { classes } from "src/lib/classes";
import skills from "../data/skills";
import levels from "../data/skill_levels";

const SoftSkills = () => {
  const softSkills = [
    "Strong communication",
    "Leadership",
    "Problem solving",
    "Creative thinking",
    "Flexible and adaptative",
    "Team player"
  ];

  return softSkills.map((skill)=> {
    return <div className={styles.softSkillItem}>{skill}</div>;
  });
}


const getLevel = (level) => {
  
  return levels[level];
}

const HardSkills = (props) => {

   return props.items.map((skill) => {
     return (
       <div className={styles.skillItem} style={{backgroundColor: props.color}}>{skill.name}</div>
     );
  })
};

const HardSkillsSection = () => {
  const hardSkillsList = skills;

  return hardSkillsList.map((category) => {

    return (
      <div>
        <div className={styles.hardSkillGroup}>{category.category}</div>
      
        <HardSkills color={category.color} items={category.items}/>
      </div>
    );
  })
};

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h1 className="section__title">Skills</h1>


      <div>
        <h3 className="section__subtitle">Soft Skills 💡</h3>

        <SoftSkills/>
      </div>

      <h3 className="section__subtitle">Hard Skills 🚀</h3>


      <div className={styles.skillsIcons}>
      
        <HardSkillsSection/>

      </div>

    </section>
  );
};

export default SkillsSection;
