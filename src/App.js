import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="background">
      <div className="background-img"></div>
      <Navbar />
      <div className="container">
        <Body />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
