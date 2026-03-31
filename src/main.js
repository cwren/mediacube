import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import right_texture from '../images/r.jpeg?inline';
import left_texture from '../images/l.jpeg?inline';
import top_texture from '../images/t.jpeg?inline';
import bottom_texture from '../images/b.jpeg?inline';
import front_texture from '../images/f.jpeg?inline';
import back_texture from '../images/k.jpeg?inline';

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
    new THREE.MeshBasicMaterial({ map: loader.load(right_texture) }), //right side
    new THREE.MeshBasicMaterial({ map: loader.load(left_texture)}), //left side
    new THREE.MeshBasicMaterial({ map: loader.load(top_texture)}), //top side
    new THREE.MeshBasicMaterial({ map: loader.load(bottom_texture)}), //bottom side
    new THREE.MeshBasicMaterial({ map: loader.load(front_texture)}), //front side
    new THREE.MeshBasicMaterial({ map: loader.load(back_texture)}), //back side
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
