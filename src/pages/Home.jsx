import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certificates from '../components/Certificates';
import Positions from '../components/Positions';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import './Home.css'


const Home = () => {
  return (
    <div className='mainDiv'>
      <Header />
     
      <About />
      <hr />
      <Skills />
      <hr />
      <Education />
      <hr />
      <Certificates />
      <hr />
      <Positions />
      <hr />
      <Projects />
      <hr />
      <Contact />
    </div>
  );
};

export default Home;
