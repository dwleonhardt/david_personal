import React, { Component } from 'react';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import { TweenLite, TimelineLite } from 'gsap';


let scene = new THREE.Scene();
// scene.background = new THREE.Color( 0xffffff,0 );

let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
camera.position.z = 100;

let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
document.body.appendChild( renderer.domElement );

//Create a PointLight and turn on shadows for the light
var ambientLight = new THREE.AmbientLight(0x999999 );
    scene.add(ambientLight);

    var lights = [];
    lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    lights[0].position.set( 1, 0, 0 );
    lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
    lights[1].position.set( 0.75, 1, 0.5 );
    lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
    lights[2].position.set( -0.75, -1, 0.5 );
    scene.add( lights[0] );
    scene.add( lights[1] );
    scene.add( lights[2] );


var spriteMap = new THREE.TextureLoader().load( '../img/circleSprite.png' );

var dotMat = new THREE.SpriteMaterial({
  map: spriteMap,
	color: 0xffffff,
});

var dots = new THREE.Geometry();
for ( var i = 0; i < 100; i ++ ) {
  let particle = new THREE.Sprite( dotMat );
  particle.scale.set(10, 10, 1)
  particle.position.x = Math.random() * 2 - 1;
  particle.position.y = Math.random() * 2 - 1;
  particle.position.z = Math.random() * 2 - 1;
  particle.position.normalize();
  particle.position.multiplyScalar( Math.random() * 10 + 450 );
  particle.scale.x = particle.scale.y = 10;
  scene.add( particle );
  dots.vertices.push( particle.position );
}
var line = new THREE.Line( dots, new THREE.LineBasicMaterial( {
  color: 0x42f4cb,
  opacity: 0.5
}));
scene.add( line );


let geometry = new THREE.TetrahedronGeometry(30,1);


let material = new THREE.MeshPhongMaterial({
  color:0xffffff,
  shading: THREE.FlatShading
});


material.shininess = 20;

const cube = new THREE.Mesh(geometry,material);
const cube1 = new THREE.Mesh(geometry,material);



cube.castShadow = true; //default is false
cube.receiveShadow = true
cube1.castShadow = true; //default is false
cube1.receiveShadow = true

scene.add(cube);
scene.add(cube1);

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var windowHalfX=window.innerWidth / 2,
windowHalfY= window.innerHeight / 2,
click = false

window.addEventListener( 'mousemove', onMouseMove, false );
document.addEventListener( 'touchstart', onDocumentTouchStart, false );
document.addEventListener( 'touchmove', onDocumentTouchMove, false );
document.addEventListener( 'click', onClick, false );
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {

  	windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
function onMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
function onDocumentTouchStart( event ) {

	if ( event.touches.length > 1 ) {

  	event.preventDefault();

    mouse.x = event.touches[ 0 ].pageX;
    mouse.y = event.touches[ 0 ].pageY - windowHalfY;

  }
}

function onClick( event ) {
  click = true;
}

function onDocumentTouchMove( event ) {

	if ( event.touches.length == 1 ) {

  	event.preventDefault();

    mouse.x = event.touches[ 0 ].pageX - windowHalfX;
    mouse.y = event.touches[ 0 ].pageY - windowHalfY;

	}
}
function render (){
  camera.position.x += ( (mouse.x * 100) - camera.position.x ) * .05;
  camera.position.y += ( - (mouse.y * 100) + 200 - camera.position.y ) * .05;
  camera.lookAt( scene.position );
  raycaster.setFromCamera( mouse, camera );

  var intersects = raycaster.intersectObjects( scene.children );

  if (intersects.length > 0 && intersects[0].object.type !== 'Line') {
    if (intersects[0].object != currentMesh) {
      currentMesh = intersects[0].object;
      currentMesh.currentHex = currentMesh.material.color.getHex();
      intersects[0].object.material.color.set( 0x42f4cb );
    }

  }
   else if (intersects.length <= 1) {
     if (currentMesh) {
       currentMesh.material.color.set( 0xffffff )
       currentMesh = null;
     }
   }



  requestAnimationFrame(render);

  rotate();

  renderer.render(scene,camera);
}




render();





let currentMesh;
var fov = camera.fov, zoom = 1.0, inc = -0.007;


function rotate(){
   camera.lookAt( scene.position );

   cube.rotation.y -= 0.01;
   cube.rotation.x -= 0.01;
   // cube.rotation.z -= 0.01;

   cube1.rotation.y += 0.01;
   cube1.rotation.x += 0.01;
   // cube1.rotation.z += 0.01;

   renderer.render( scene, camera );
}







class Home extends Component {
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
