import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene();
const cam =  new THREE.PerspectiveCamera(
    100,  
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

cam.position.z = 8;


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize',() =>{

    cam.aspect =  window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();

     renderer.setSize(window.innerWidth, window.innerHeight);

})

document.body.appendChild(renderer.domElement);

const controls= new OrbitControls(cam,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 30;

const light = new THREE.DirectionalLight(0xffffff, 3)
light.position.set(2,5,2)
scene.add(light);

const fillLight  = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(fillLight);

const  loader =  new THREE.TextureLoader();
const texture = loader.load("img/earth.jpg");
const sunText = loader.load("img/sun.jpg");

const sunGeometry = new THREE.SphereGeometry(4,52,52)
const sunMaterial = new THREE.MeshStandardMaterial({map:sunText, roughness: 1, metalness:0 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.z = 10

scene.add(sun);

const geometry = new THREE.SphereGeometry(3,42,42)
const material = new THREE.MeshStandardMaterial({map:texture, roughness: 1, metalness:0 });
const planet = new THREE.Mesh(geometry, material);
planet.position.x = 7

scene.add(planet);

const starGeometry = new THREE.BufferGeometry();
const starcount = 1500;

const starPositions = [];

for (let i = 0; i < starcount; i++){
    const  x = (Math.random() - 0.5 )* 200;
    const  y = (Math.random() - 0.5 )* 200;
    const  z = (Math.random() - 0.5 )* 200;

    starPositions.push(x,y,z);

}



starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starPositions, 3)
);


const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.3
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

function  animate() {
    requestAnimationFrame(animate)
    planet.rotation.y += 0.01;

    sun.rotation.y += 0.01;



    controls.update();
    renderer.render(scene, cam);
}

animate();



