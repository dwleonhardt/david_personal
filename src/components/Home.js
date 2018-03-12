import React, { Component } from 'react';
import * as THREE from 'three';
import history from './History';
import About from './About';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      scene: new THREE.Scene(),
      camera: new
        THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000),
      renderer: new THREE.WebGLRenderer({ antialias: true, alpha: true }),
      ambientLight: new THREE.AmbientLight(0x999999 ),
      lights: [],
      geometry: new THREE.TetrahedronGeometry(30,1),
      material: new THREE.MeshPhongMaterial({
        color:0xffffff,
        shading: THREE.FlatShading
      }),
      raycaster: new THREE.Raycaster(),
      mouse: new THREE.Vector2(),
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2,
      currentMesh: null,
      zoom: 1.0,
      inc: -0.007,
      polyClick: false,
      trackMouse: true,
      about: false,
    }
  }

  componentDidMount() {
    const spriteMap = new THREE.TextureLoader().load( '../img/circleSprite.png' );
    const dotMat = new THREE.SpriteMaterial({
      map: spriteMap,
      color: 0xffffff,
    });
    const dots = new THREE.Geometry();
    const line = new THREE.Line( dots, new THREE.LineBasicMaterial( {
      color: 0xffffff
    }));
    const cube = new THREE.Mesh(this.state.geometry,this.state.material);
    const cube1 = cube.clone();
    const projects = cube.clone();
    let copy = Object.assign({}, this.state);
    projects.position.set(85,0,0);
    projects.name = 'projects';
    copy.cube = cube;
    copy.cube1 = cube1;
    copy.projects = projects;

    copy.camera.position.z = 100;
    copy.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    copy.renderer.setSize(window.innerWidth, window.innerHeight);
    copy.renderer.autoClear = false;
    copy.renderer.setClearColor(0x000000, 0.0);
    document.body.appendChild( copy.renderer.domElement );
    copy.scene.add(copy.ambientLight);
    copy.lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    copy.lights[0].position.set( 1, 0, 0 );
    copy.lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
    copy.lights[1].position.set( 0.75, 1, 0.5 );
    copy.lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
    copy.lights[2].position.set( -0.75, -1, 0.5 );
    copy.scene.add( copy.lights[0] );
    copy.scene.add( copy.lights[1] );
    copy.scene.add( copy.lights[2] );
    for ( var i = 0; i < 100; i ++ ) {
      let particle = new THREE.Sprite( dotMat );
      particle.scale.set(10, 10, 1)
      particle.position.x = Math.random() * 2 - 1;
      particle.position.y = Math.random() * 2 - 1;
      particle.position.z = Math.random() * 2 - 1;
      particle.position.normalize();
      particle.position.multiplyScalar( Math.random() * 10 + 450 );
      particle.scale.x = particle.scale.y = 10;
      copy.scene.add( particle );
      dots.vertices.push( particle.position );
      copy.scene.add( line );
    }
    copy.material.shininess = 20;
    cube.castShadow = true; //default is false
    cube.receiveShadow = true
    cube1.castShadow = true; //default is false
    cube1.receiveShadow = true
    console.log('cube');
    copy.scene.add(cube);
    copy.scene.add(cube1);
    copy.rendered = true;
    console.log(copy);
    this.setState(copy);

    window.addEventListener( 'mousemove', this.onMouseMove, false );
    document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
    document.addEventListener( 'click', this.onClick, false );
    window.addEventListener( 'resize', this.onWindowResize, false );

    this.renderScene();
  }


  onWindowResize = () => {
    let copy = Object.assign({}, this.state);
    copy.windowHalfX = window.innerWidth / 2;
    copy.windowHalfY = window.innerHeight / 2;
    copy.camera.aspect = window.innerWidth / window.innerHeight;
    copy.camera.updateProjectionMatrix();
    copy.renderer.setSize( window.innerWidth, window.innerHeight );
    this.setState(copy);
  }
  onMouseMove = ( event ) => {
    let copy = Object.assign({}, this.state);
    copy.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    copy.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    this.setState(copy);
  }

  onDocumentTouchStart = ( event ) => {

    if ( event.touches.length > 1 ) {
      event.preventDefault();
      let copy = Object.assign({}, this.state);
      copy.mouse.x = event.touches[ 0 ].pageX;
      copy.mouse.y = event.touches[ 0 ].pageY - this.state.windowHalfY;
      this.setState(copy);
    }
  }

  onClick = ( event ) => {
    if (this.state.intersects.length > 0 && this.state.intersects[0].object.type !== 'Line' && this.state.camera.position.y >= 10) {
      let copy = Object.assign({}, this.state);
      if (this.state.about) {
        copy.polyClick = false;
        copy.trackMouse= true;
        copy.about = false;
      }
      else {
        copy.polyClick = true;
        copy.trackMouse= false;
        copy.about = true;
      }
      this.setState(copy);
    }
  }

  onDocumentTouchMove = ( event ) => {

    if ( event.touches.length === 1 ) {

      event.preventDefault();
      let copy = Object.assign({}, this.state);
      copy.mouse.x = event.touches[ 0 ].pageX - this.state.windowHalfX;
      copy.mouse.y = event.touches[ 0 ].pageY - this.state.windowHalfY;
      this.setState(copy);
    }
  }

  renderScene = () => {
    let copy = Object.assign({}, this.state);

    if (this.state.trackMouse) {
      copy.camera.position.x += ( (copy.mouse.x * 100) - copy.camera.position.x ) * .05;
      copy.camera.position.y += ( - (copy.mouse.y * 100) + 200 - copy.camera.position.y ) * .05;
      copy.camera.lookAt( copy.scene.position );
    }

    copy.raycaster.setFromCamera( copy.mouse, copy.camera );

    let intersects = copy.raycaster.intersectObjects( copy.scene.children );

    copy.intersects = intersects;

    if (intersects.length > 0 && intersects[0].object.type !== 'Line' && this.state.camera.position.y >= 10) {
      if (intersects[0].object !== this.state.currentMesh) {
        copy.currentMesh = intersects[0].object;
        copy.currentMesh.currentHex = copy.currentMesh.material.color.getHex();
        intersects[0].object.material.color.set( 0x42f4cb );
      }

    }
    else if (intersects.length <= 1) {
      if (copy.currentMesh) {
        copy.currentMesh.material.color.set( 0xffffff )
        copy.currentMesh = null;
      }
    }
    if (this.state.polyClick) {
      copy.camera.position.y -= 8;
    }
    if (this.state.polyClick && copy.camera.position.y <= 10) {
      copy.polyClick = false;
    }
    requestAnimationFrame(this.renderScene);

    copy.renderer.render(copy.scene,copy.camera);
    this.setState(copy);
    this.rotate();
  }
  //
  rotate = () => {
    let copy = Object.assign({}, this.state);
    copy.camera.lookAt( this.state.scene.position );

    if (copy.cube) {
      copy.cube.rotation.y -= 0.01;
      copy.cube.rotation.x -= 0.01;
      // cube.rotation.z -= 0.01;

      copy.cube1.rotation.y += 0.01;
      copy.cube1.rotation.x += 0.01;
      // cube1.rotation.z += 0.01;
    }
    copy.renderer.render( this.state.scene, this.state.camera );
    this.setState(copy);
  }

  render() {
    if (this.state.about) {
      return <About state={this.state}/>
    }
    else {
      return (
        <div>
          <div className='enter'>David Leonhardt</div>
          <div className='container'>
            <div className='menu'>
              <div className='instruct'>Click The Polygon to Enter</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
