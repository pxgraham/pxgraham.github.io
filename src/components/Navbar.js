import React from 'react';
import './../App.css';

function toggleOn() {
  document.getElementById('mobile-nav-icon1').style.display = 'none';
  document.getElementById('mobile-nav-icon2').style.display = 'block';
  document.getElementById('mobile-nav-dropdown').style.display = 'block';
}

function toggleOff() {
  document.getElementById('mobile-nav-icon1').style.display = 'block';
  document.getElementById('mobile-nav-icon2').style.display = 'none';
  document.getElementById('mobile-nav-dropdown').style.display = 'none';
}

function Navbar() {
  return (
      <div className="navbar">
        <div className="navbar_background-img"></div>
        <div className="navbar-container">

          <div className="nav-item1">
            <i class="fas fa-bezier-curve"></i>
          </div>

          <div className="nav-item2">
            <div className="name">
              Peyton Graham
            </div>
            <div className="subtext">
              Full Stack Web Developer
            </div>
          </div>

          {/* <div className="nav-item-right">
            <div className="nav-item-right-padder"></div>
              Store
          </div> */}

          <div className="desktop-nav">  

            <div id="contact" className="nav-item-right">          
              <div className="nav-item-right-padder"></div>
                Contact
                <div className="contact-dropdown">
                  <p className="dropdown-item"><i class="fas fa-comments"></i></p>
                  <p className="dropdown-item"><i class="far fa-envelope"></i></p>
                  <p className="dropdown-item"><i class="fas fa-phone"></i></p>
                  <p className="dropdown-item"><i class="fab fa-linkedin"></i></p> 
                  <p className="dropdown-item"><i class="fab fa-github-square"></i></p>                             
              </div>
            </div>

            <div id="about" className="nav-item-right">
              <div className="nav-item-right-padder"></div>
              About
              <div className="about-dropdown">              
                <p className="dropdown-item">My Goals</p>
                <p className="dropdown-item">My Drive</p>
                <p className="dropdown-item">My Journey</p>              
              </div>
            </div>

            <div id="portfolio" className="nav-item-right nav-active">
              <div className="nav-item-right-padder"></div>
              Portfolio
              <div className="portfolio-dropdown">
                <p className="dropdown-item">Games</p>
                <p className="dropdown-item">Utilities</p>
                {/* <p>hi</p> */}
              </div>
            </div>
            
          </div>

          <div className="mobile-nav">
            <div className="mobile-nav-icon">
              <i onClick={toggleOn} id="mobile-nav-icon1" className="fas fa-bars"></i>
              <i onClick={toggleOff} id="mobile-nav-icon2" className="fas fa-times"></i>
            </div>
          </div>
        
        </div>

        <div id="mobile-nav-dropdown" className="mobile-nav-dropdown">
            <p className="mobile-dropdown-item">Portfolio</p>
            <p className="mobile-dropdown-item">About</p>
            <p className="mobile-dropdown-item">Contact</p>
        </div>

      </div>
  );
}

export default Navbar;
