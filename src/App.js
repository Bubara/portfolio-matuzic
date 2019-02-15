import React, { Component } from 'react'; 
import ReallySmoothScroll from 'really-smooth-scroll';
import Navbar from './components/navBar';
import HomeScreen from './components/homeScreen';
import Profile from './components/profile';
import Education from './components/education';
import Certificates from './components/certificates';
import Projects from './components/projects';
import Technologies from './components/technologies';
import Contact from './components/contact';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faHome)
library.add(faStar)
library.add(faMobile)
library.add(faEnvelope)


ReallySmoothScroll.shim();

ReallySmoothScroll.config({
  mousewheelSensitivity: 3, 
  keydownSensitivity: 30
});

class App extends Component {
  render() {
   
    return (
      <div>
          <Navbar />
          <HomeScreen />
          <Profile />
          <Education />
          <Certificates />
          <Projects />
          <Technologies />
          <Contact />
      </div>
    );
  }
}

export default App;
