import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene();
const cam =  new THREE.PerspectiveCamera(
    120,  
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);


cam.position.set(0, 20, 100);



const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    cam.aspect = width / height;
    cam.updateProjectionMatrix();

    renderer.setSize(width, height);
});

const controls= new OrbitControls(cam,renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 200;

controls.target.set(35, 0, 0);
controls.update();

const light = new THREE.DirectionalLight(0xffffff, 3)
light.position.set(2,5,2)
scene.add(light);

const fillLight  = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(fillLight);

const  loader =  new THREE.TextureLoader();
const texture = loader.load("img/earth.jpg");
const sunText = loader.load("img/sun.jpg");
const merText = loader.load("img/mercury.jpg");
const venText = loader.load("img/venus.jpg")
const marText = loader.load("img/mars.jpg")
const jupText = loader.load("img/jupiter.jpg")
const satText = loader.load("img/saturn.jpg");
const ringText = loader.load("img/saturn_ring.png")
const uranusText = loader.load("img/uranus.jpg")
const napText = loader.load("img/neptune.jpg")

const sunGeometry = new THREE.SphereGeometry(5,52,52)
const sunMaterial = new THREE.MeshStandardMaterial({map:sunText, roughness: 1, metalness:0 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.set(-30,0,0);

scene.add(sun);

const merGeometry = new THREE.SphereGeometry(1,42,42)
const merMaterial = new THREE.MeshStandardMaterial({map:merText, roughness: 1, metalness:0 });
const mercury = new THREE.Mesh(merGeometry, merMaterial);
mercury.position.set(-23,0,0);

scene.add(mercury);

const mercuryOrbit = new THREE.Object3D();
scene.add(mercuryOrbit);
mercuryOrbit.position.set(-23,0,0);
mercuryOrbit.add(mercury);


const venGeometry = new THREE.SphereGeometry(1.7,42,42)
const venMaterial = new THREE.MeshStandardMaterial({map:venText, roughness: 1, metalness:0 });
const venus = new THREE.Mesh(venGeometry, venMaterial);
venus.position.set(-18,0,0);


scene.add(venus);

const venusOrbit = new THREE.Object3D();
scene.add(venusOrbit);
venusOrbit.position.set(-18,0,0);
venusOrbit.add(venus);


const geometry = new THREE.SphereGeometry(1.7,42,42)
const material = new THREE.MeshStandardMaterial({map:texture, roughness: 1, metalness:0 });
const planet = new THREE.Mesh(geometry, material);
planet.position.set(-12,0,0);

scene.add(planet);


const marGeometry = new THREE.SphereGeometry(1.3,42,42)
const marMaterial = new THREE.MeshStandardMaterial({map:marText, roughness: 1, metalness:0 });
const mars = new THREE.Mesh(marGeometry, marMaterial);
mars.position.set(-5,0,0);
scene.add(mars);

const jupGeometry = new THREE.SphereGeometry(4.4,42,42)
const jupMaterial = new THREE.MeshStandardMaterial({map:jupText, roughness: 1, metalness:0 });
const jupiter = new THREE.Mesh(jupGeometry, jupMaterial);
jupiter.position.set(7,0,0);
scene.add(jupiter);

const satGeometry = new THREE.SphereGeometry(4,42,42)
const satMaterial = new THREE.MeshStandardMaterial({map:satText, roughness: 1, metalness:0 });
const saturn = new THREE.Mesh(satGeometry, satMaterial);
saturn.position.set(20,0,0);

scene.add(saturn);

const ringGeometry = new THREE.RingGeometry(4.7, 7, 100);

const ringMaterial = new THREE.MeshStandardMaterial({
    map: ringText,
    side: THREE.DoubleSide,
    roughness: 1,
    metalness: 0,
    transparent: true,
    opacity: 0.9
});

const ring = new THREE.Mesh(ringGeometry, ringMaterial);


ring.rotation.x = -Math.PI / 2;

saturn.add(ring);

const uraGeometry = new THREE.SphereGeometry(4,42,42)
const uraMaterial = new THREE.MeshStandardMaterial({map:uranusText, roughness: 1, metalness:0 });
const uranus = new THREE.Mesh(uraGeometry, uraMaterial);
uranus.position.set(34,0,0);

scene.add(uranus);

const napGeometry = new THREE.SphereGeometry(4,42,42)
const napMaterial = new THREE.MeshStandardMaterial({map:napText, roughness: 1, metalness:0 });
const napturn = new THREE.Mesh(napGeometry, napMaterial);
napturn.position.set(55,0,0);

scene.add(napturn);




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
    planet.rotation.y += 0.010;
    mercury.rotation.y += 0.008;
    sun.rotation.y += 0.01;
    venus.rotation.y += -0.002;
    mars.rotation.y += 0.009;
    jupiter.rotation.y += 0.025;
    saturn.rotation.y += 0.022;
    uranus.rotation.y += -0.015;
    napturn.rotation.y += 0.018;


    mercuryOrbit.rotation.y += 0.040;
    venusOrbit.rotation.y += 0.015;

    controls.update();
    renderer.render(scene, cam);
}

animate();



