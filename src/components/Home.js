import React, { Component } from 'react';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import { TweenLite, TimelineLite } from 'gsap';


// const scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xffffff,0 );
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
// camera.position.z = 100;

// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.autoClear = false;
// renderer.setClearColor(0x000000, 0.0);
// document.body.appendChild( renderer.domElement );

//Create a PointLight and turn on shadows for the light
// const ambientLight = new THREE.AmbientLight(0x999999 );
// scene.add(ambientLight);

// const lights = [];
// lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
// lights[0].position.set( 1, 0, 0 );
// lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
// lights[1].position.set( 0.75, 1, 0.5 );
// lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
// lights[2].position.set( -0.75, -1, 0.5 );
// scene.add( lights[0] );
// scene.add( lights[1] );
// scene.add( lights[2] );


// var spriteMap = new THREE.TextureLoader().load( '../img/circleSprite.png' );

// var dotMat = new THREE.SpriteMaterial({
//   map: spriteMap,
//   color: 0xffffff,
// });

// var dots = new THREE.Geometry();
// for ( var i = 0; i < 100; i ++ ) {
//   let particle = new THREE.Sprite( dotMat );
//   particle.scale.set(10, 10, 1)
//   particle.position.x = Math.random() * 2 - 1;
//   particle.position.y = Math.random() * 2 - 1;
//   particle.position.z = Math.random() * 2 - 1;
//   particle.position.normalize();
//   particle.position.multiplyScalar( Math.random() * 10 + 450 );
//   particle.scale.x = particle.scale.y = 10;
//   scene.add( particle );
//   dots.vertices.push( particle.position );
// }
// var line = new THREE.Line( dots, new THREE.LineBasicMaterial( {
//   color: 0x42f4cb,
//   opacity: 0.5
// }));
// scene.add( line );


// let geometry = new THREE.TetrahedronGeometry(30,1);


// let material = new THREE.MeshPhongMaterial({
//   color:0xffffff,
//   shading: THREE.FlatShading
// });


// material.shininess = 20;

// const cube = new THREE.Mesh(geometry,material);
// const cube1 = new THREE.Mesh(geometry,material);



// cube.castShadow = true; //default is false
// cube.receiveShadow = true
// cube1.castShadow = true; //default is false
// cube1.receiveShadow = true

// scene.add(cube);
// scene.add(cube1);

// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();

// var windowHalfX=window.innerWidth / 2,
// windowHalfY= window.innerHeight / 2,
// click = false

// window.addEventListener( 'mousemove', onMouseMove, false );
// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
// document.addEventListener( 'touchmove', onDocumentTouchMove, false );
// document.addEventListener( 'click', onClick, false );
// window.addEventListener( 'resize', onWindowResize, false );
// function onWindowResize() {
//
//   windowHalfX = window.innerWidth / 2;
//   windowHalfY = window.innerHeight / 2;
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//
//   renderer.setSize( window.innerWidth, window.innerHeight );
//
// }
// function onMouseMove( event ) {
//   mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
//   mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
// }
// function onDocumentTouchStart( event ) {
//
//   if ( event.touches.length > 1 ) {
//
//     event.preventDefault();
//
//     mouse.x = event.touches[ 0 ].pageX;
//     mouse.y = event.touches[ 0 ].pageY - windowHalfY;
//
//   }
// }
//
// function onClick( event ) {
//   console.log('here');
// }
//
// function onDocumentTouchMove( event ) {
//
//   if ( event.touches.length == 1 ) {
//
//     event.preventDefault();
//
//     mouse.x = event.touches[ 0 ].pageX - windowHalfX;
//     mouse.y = event.touches[ 0 ].pageY - windowHalfY;
//
//   }
// }
// function render (){
//   camera.position.x += ( (mouse.x * 100) - camera.position.x ) * .05;
//   camera.position.y += ( - (mouse.y * 100) + 200 - camera.position.y ) * .05;
//   camera.lookAt( scene.position );
//   raycaster.setFromCamera( mouse, camera );
//
//   var intersects = raycaster.intersectObjects( scene.children );
//
//   if (intersects.length > 0 && intersects[0].object.type !== 'Line') {
//     if (intersects[0].object != currentMesh) {
//       currentMesh = intersects[0].object;
//       currentMesh.currentHex = currentMesh.material.color.getHex();
//       intersects[0].object.material.color.set( 0x42f4cb );
//     }
//
//   }
//   else if (intersects.length <= 1) {
//     if (currentMesh) {
//       currentMesh.material.color.set( 0xffffff )
//       currentMesh = null;
//     }
//   }



//   requestAnimationFrame(render);
//
//   rotate();
//
//   renderer.render(scene,camera);
// }










// let currentMesh;
// var fov = camera.fov, zoom = 1.0, inc = -0.007;


// function rotate(){
//   camera.lookAt( scene.position );
//
//   cube.rotation.y -= 0.01;
//   cube.rotation.x -= 0.01;
//   // cube.rotation.z -= 0.01;
//
//   cube1.rotation.y += 0.01;
//   cube1.rotation.x += 0.01;
//   // cube1.rotation.z += 0.01;
//
//   renderer.render( scene, camera );
// }








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
      color: 0x42f4cb,
      opacity: 0.5
    }));
    const cube = new THREE.Mesh(this.state.geometry,this.state.material);
    const cube1 = new THREE.Mesh(this.state.geometry,this.state.material);
    let copy = Object.assign({}, this.state);
    copy.cube = cube;
    copy.cube1 = cube1;
    this.setState(copy);

    this.state.camera.position.z = 100;
    this.state.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    this.state.renderer.setSize(window.innerWidth, window.innerHeight);
    this.state.renderer.autoClear = false;
    this.state.renderer.setClearColor(0x000000, 0.0);
    document.body.appendChild( this.state.renderer.domElement );
    this.state.scene.add(this.state.ambientLight);
    this.state.lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    this.state.lights[0].position.set( 1, 0, 0 );
    this.state.lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
    this.state.lights[1].position.set( 0.75, 1, 0.5 );
    this.state.lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
    this.state.lights[2].position.set( -0.75, -1, 0.5 );
    this.state.scene.add( this.state.lights[0] );
    this.state.scene.add( this.state.lights[1] );
    this.state.scene.add( this.state.lights[2] );
    for ( var i = 0; i < 100; i ++ ) {
      let particle = new THREE.Sprite( dotMat );
      particle.scale.set(10, 10, 1)
      particle.position.x = Math.random() * 2 - 1;
      particle.position.y = Math.random() * 2 - 1;
      particle.position.z = Math.random() * 2 - 1;
      particle.position.normalize();
      particle.position.multiplyScalar( Math.random() * 10 + 450 );
      particle.scale.x = particle.scale.y = 10;
      this.state.scene.add( particle );
      dots.vertices.push( particle.position );
      this.state.scene.add( line );
    }
    this.state.material.shininess = 20;
    cube.castShadow = true; //default is false
    cube.receiveShadow = true
    cube1.castShadow = true; //default is false
    cube1.receiveShadow = true
    this.state.scene.add(cube);
    this.state.scene.add(cube1);
    window.addEventListener( 'mousemove', this.onMouseMove, false );
    document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
    document.addEventListener( 'click', this.onClick, false );
    window.addEventListener( 'resize', this.onWindowResize, false );
    this.renderScene();
  }


  onWindowResize = () => {
    this.state.windowHalfX = window.innerWidth / 2;
    this.state.windowHalfY = window.innerHeight / 2;
    this.state.camera.aspect = window.innerWidth / window.innerHeight;
    this.state.camera.updateProjectionMatrix();

    this.state.renderer.setSize( window.innerWidth, window.innerHeight );

  }
  onMouseMove = ( event ) => {
    this.state.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    this.state.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  }

  onDocumentTouchStart = ( event ) => {

    if ( event.touches.length > 1 ) {

      event.preventDefault();

      this.state.mouse.x = event.touches[ 0 ].pageX;
      this.state.mouse.y = event.touches[ 0 ].pageY - this.state.windowHalfY;

    }
  }

  onClick = ( event ) => {
    console.log('here');
  }

  onDocumentTouchMove = ( event ) => {

    if ( event.touches.length == 1 ) {

      event.preventDefault();

      this.state.mouse.x = event.touches[ 0 ].pageX - this.state.windowHalfX;
      this.state.mouse.y = event.touches[ 0 ].pageY - this.state.windowHalfY;

    }
  }

  renderScene = () => {

    this.state.camera.position.x += ( (this.state.mouse.x * 100) - this.state.camera.position.x ) * .05;
    this.state.camera.position.y += ( - (this.state.mouse.y * 100) + 200 - this.state.camera.position.y ) * .05;
    this.state.camera.lookAt( this.state.scene.position );
    this.state.raycaster.setFromCamera( this.state.mouse, this.state.camera );

    var intersects = this.state.raycaster.intersectObjects( this.state.scene.children );

    if (intersects.length > 0 && intersects[0].object.type !== 'Line') {
      if (intersects[0].object != this.state.currentMesh) {
        this.state.currentMesh = intersects[0].object;
        this.state.currentMesh.currentHex = this.state.currentMesh.material.color.getHex();
        intersects[0].object.material.color.set( 0x42f4cb );
      }

    }
    else if (intersects.length <= 1) {
      if (this.state.currentMesh) {
        this.state.currentMesh.material.color.set( 0xffffff )
        this.state.currentMesh = null;
      }
    }
    requestAnimationFrame(this.renderScene);


    this.state.renderer.render(this.state.scene,this.state.camera);
    this.rotate();
  }
  //
  rotate = () => {
    this.state.camera.lookAt( this.state.scene.position );

    if (this.state.cube) {
      this.state.cube.rotation.y -= 0.01;
      this.state.cube.rotation.x -= 0.01;
      // cube.rotation.z -= 0.01;

      this.state.cube1.rotation.y += 0.01;
      this.state.cube1.rotation.x += 0.01;
      // cube1.rotation.z += 0.01;
    }
    this.state.renderer.render( this.state.scene, this.state.camera );
  }

  render() {
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

export default Home;
