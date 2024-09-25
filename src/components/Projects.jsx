import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Kalgidhar Trust App<a 
            href="https://github.com/Sumanpreet3698/Kalgidhar-Trust-App" 
            target="_blank" 
            rel="noopener noreferrer"
          ></a></h3>
          <p>Developed an app using Flutter that provides a centralized
platform for accessing detailed information on the operations of
the Kalgidhar Trust.</p>
        </div>
        <div className="project-card">
          <h3>Scholarship Portal Website<a 
            href="https://github.com/Sumanpreet3698/Scholarship-Portal-Website" 
            target="_blank" 
            rel="noopener noreferrer"
          ></a></h3>
          <p>Developing a scholarship portal to deliver essential and targeted
          information to our university students, will impact 500+ girls</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
