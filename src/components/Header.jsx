import React from 'react';
import './Header.css';

// Social media icons (You can replace these with SVGs stored in your project)
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import leetcodeIcon from '../assets/leetcode.svg';
import emailIcon from '../assets/gmail.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">
        <h1>Sumanpreet Kaur</h1>
        <p className="subtitle"> Developer | Web Enthusiast | Flutter | Machine Learning</p>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#certificates">Certificates</a>
        <a href="#positions">Positions of Responsibility</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.linkedin.com/in/sumanpreet-kaur3/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Sumanpreet3698/" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://leetcode.com/u/Sumanpreet_/" target="_blank" rel="noopener noreferrer">
          <img src={leetcodeIcon} alt="LeetCode" />
        </a>
        <a href="mailto:suman3698kaur@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" />
        </a>
      </div>
    </header>
  );
};

export default Header;
