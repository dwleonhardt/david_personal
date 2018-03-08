import React, { Component } from 'react';
import * as THREE from 'three';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import phone from '../img/phone.png';
import email from '../img/email.png';
import pauline from '../img/pauline.png';
import unself from '../img/unself.png';
import tank from '../img/tank.png';
import restaurant from '../img/restaurant.png';

const About = () => {
  return (
    <div>
      <div className='centerProj'>
        <div className='projects'>
          <div className='header'>Projects</div>
          <div className='label'>Pauline</div>
          <img className='project' src={pauline}/>
          <div className='label'>Unself</div>
          <img className='project' src={unself}/>
          <div className='label'>Desktop Tanks</div>
          <img className='project' src={tank}/>
          <div className='label'>Restaurant Roulette</div>
          <img className='project' src={restaurant}/>
        </div>
      </div>
      <div className='centerVert'>
        <div className='contact'>
          <a href='https://www.linkedin.com/in/dwleonhardt' target="_blank">
            <img className='logo' src={linkedin}/>
          </a>
          <a href='https://github.com/dwleonhardt' target="_blank">
            <img className='logo' src={github}/>
          </a>
          <a href='mailto:dwleonhardt@gmail.com'>
            <img className='logo' src={email}/>
          </a>
        </div>
      </div>
    </div>
  );
}


export default About;
