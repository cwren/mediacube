import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

var camera, renderer;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
const scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
window.addEventListener( 'resize', onWindowResize );

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
const cubeMaterials = [
    new THREE.MeshBasicMaterial({ map: loader.load('images/r.jpeg') }), //right side
    new THREE.MeshBasicMaterial({ map: loader.load('images/l.jpeg')}), //left side
    new THREE.MeshBasicMaterial({ map: loader.load('images/t.jpeg')}), //top side
    new THREE.MeshBasicMaterial({ map: loader.load('images/b.jpeg')}), //bottom side
    new THREE.MeshBasicMaterial({ map: loader.load('images/f.jpeg')}), //front side
    new THREE.MeshBasicMaterial({ map: loader.load('images/k.jpeg')}), //back side
];

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh( geometry, cubeMaterials );
scene.add( cube );

camera.position.z = 2;

function animate( time ) {
  controls.update();
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
