import React from 'react';
import './Skills.css';

// Importing icons
import flutterIcon from '../assets/flutter.svg';
import uxDesignIcon from '../assets/ui_ux_web_design_responsive_layout_tablet_icon_153181.png';
import pythonIcon from '../assets/python.svg';
import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import jsIcon from '../assets/javascript (3).svg';
import machineLearningIcon from '../assets/machine-learning_8087667.png';
import mysqlIcon from '../assets/mysql.svg';
import gitIcon from '../assets/github.svg';

const skillsData = [
  { src: flutterIcon, alt: 'Flutter & Dart', name: 'Flutter & Dart' },
  { src: uxDesignIcon, alt: 'UX Design', name: 'UX Design' },
  { src: pythonIcon, alt: 'Python', name: 'Python' },
  { src: htmlIcon, alt: 'HTML', name: 'HTML' },
  { src: cssIcon, alt: 'CSS', name: 'CSS' },
  { src: jsIcon, alt: 'JavaScript', name: 'JavaScript' },
  { src: machineLearningIcon, alt: 'Machine Learning', name: 'Machine Learning' },
  { src: mysqlIcon, alt: 'MySQL', name: 'MySQL' },
  { src: gitIcon, alt: 'Git & Version Control', name: 'Git & Version Control' },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.src} alt={skill.alt} className="skill-icon" />
            <div className="skill-tooltip">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
