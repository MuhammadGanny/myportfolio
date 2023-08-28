import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // You can create this CSS file for general styling
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
         
    </div>
      
  );
}

export default App;
