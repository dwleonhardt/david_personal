import React, { Component } from 'react';
import * as THREE from 'three';
import * as TrackballControls from 'three-trackballcontrols';
import { TweenLite, TimelineLite } from 'gsap';


let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);

let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
renderer.setClearColor (0x000000, 1);

//Create a PointLight and turn on shadows for the light
var light = new THREE.SpotLight( 0xffffff, 8, 90, 2 );
light.position.set( 10, 20, 80 );
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;       // default
light.shadow.camera.far = 500      // default
// var helper = new THREE.CameraHelper( light.shadow.camera );
// scene.add( helper );

let geometry = new THREE.TetrahedronGeometry(1,2);

let material = new THREE.MeshPhongMaterial({color:0x42f4cb, });
let material1 = new THREE.MeshPhongMaterial({color:0x419bf4 });

material.shininess = 60;

const cube = new THREE.Mesh(geometry,material);
const cube1 = new THREE.Mesh(geometry,material);


console.log(cube.rotation);

cube.castShadow = true; //default is false
cube.receiveShadow = true
cube1.castShadow = true; //default is false
cube1.receiveShadow = true

scene.add(cube);
scene.add(cube1);

// let edges = new THREE.EdgesHelper( cube, 0x419bf4);
// edges.material.linewidth = 2;
// scene.add(edges);
//
// let edges1 = new THREE.EdgesHelper( cube1, 0x419bf4);
// edges.material.linewidth = 2;
// scene.add(edges1);
// edges.castShadow = false; //default is false
// edges.receiveShadow = true
// edges1.castShadow = false; //default is false
// edges1.receiveShadow = true

camera.position.z = 5;

// let degrees = 45;
//
// cube.rotation.y = degrees * (Math.PI/180);
// cube.rotation.z = degrees * (Math.PI/180);
// edges.rotation.y = degrees * (Math.PI/180);
// edges.rotation.z = degrees * (Math.PI/180);



function render (){
  requestAnimationFrame(render);

  // camin();
  rotate();

  renderer.render(scene,camera);
}
render();

function rotate(){
   camera.lookAt( scene.position );

   cube.rotation.y -= 0.01;
   // edges.rotation.y -= 0.01;
   cube.rotation.x -= 0.01;
   // edges.rotation.x -= 0.01;

   cube1.rotation.y += 0.01;
   // edges1.rotation.y += 0.01;
   cube1.rotation.x += 0.01;
   // edges1.rotation.x += 0.01;


   renderer.render( scene, camera );
}



// let campo= true;


// function camin(){
//
// if(campo==true){
//     if(camera.position.z>2){
//       camera.position.z-=.01;
//     }
//     else {
//       campo = false;
//       camout()
//     }
// }
//
// else if(campo==false){
//   camout();
//   console.log(camera.position.z);
// }
// }
//
// function camout(){
//   if(camera.position.z<6){
//     camera.position.z+=.1;
//     console.log('going out')
//   }
//   else{
//     campo=true;
//   }
// }


class Home extends Component {
  render() {
    return (
      <div className='header'>Header</div>
    );
  }
}

export default Home;
