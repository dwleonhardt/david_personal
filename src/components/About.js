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
import back from '../img/back.png';

class About extends Component {
  back() {
    this.props.state.about = false;
    this.props.state.polyClick = false;
    this.props.state.trackMouse = true;
  };
  render () {
    return (
      <div>
        <div className='centerProj'>
          <div className='projects'>
            <div className='header'>Projects</div>
            <div className='label'>Pauline</div>
            <a href='https://tranquil-citadel-32618.herokuapp.com/' target="_blank">
              <img className='project' src={pauline}/>
            </a>
            <div className='label'>Unself</div>
            <a href='http://unselfproject.herokuapp.com/' target="_blank">
              <img className='project' src={unself}/>
            </a>
            <div className='label'>Desktop Tanks</div>
            <a href='http://desktoptanks.herokuapp.com/' target="_blank">
              <img className='project' src={tank}/>
            </a>
            <div className='label'>Restaurant Roulette</div>
            <a href='https://restaurantroulette.surge.sh/' target="_blank">
              <img className='project' src={restaurant}/>
            </a>
          </div>
        </div>
        <div className='centerVert'>
          <div className='contact'>
            <div className='back'>
              <a onClick={() => this.back()}>
                <img className='logo' src={back}/>
              </a>
            </div>
          </div>
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
}


export default About;
