import React from 'react';
import './Positions.css';

const Positions = () => {
  return (
    <section id="positions">
      <h2>Positions of Responsibility</h2>
      <div className="position-item">
        <h3>Core Member</h3>
        <p><strong>Coding & Hackathon Club, Eternal University</strong></p>
        <p><em>12/2023 - Present</em></p>
        <p>Conducted 2 successful Hackathons for B.Tech CSE students at our university.</p>
        <p><strong>Skills:</strong> Problem Solving, Leadership</p>
      </div>

      <div className="position-item">
        <h3>Volunteer</h3>
        <p><strong>Techshilla, Baru Sahib</strong></p>
        <p><em>12/2023 - Present</em></p>
        <p>Organized a workshop on AI/ML for two government school students, engaging a total of 60 students.</p>
        <p><strong>Skills:</strong> Leadership</p>
      </div>
    </section>
  );
};

export default Positions;
