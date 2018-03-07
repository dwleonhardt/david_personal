import React, { Component } from 'react';
import * as THREE from 'three';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import phone from '../img/phone.png';
import email from '../img/email.png';

const About = () => {
  return (
    <div>
      {/* <div className='enter'>About</div> */}
      <div className='centerVert'>
        <div className='contact'>
          <img src={linkedin}/>
          <img src={github}/>
          <img src={phone}/>
          <img src={email}/>
        </div>
      </div>
    </div>
  );
}


export default About;
