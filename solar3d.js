import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/OrbitControls.js";


const scene = new THREE.Scene();
const cam =  new THREE.PerspectiveCamera(
    60,  
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
controls.minDistance = 0.1;
controls.maxDistance = 200;

controls.target.set(0, 0, 0);
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
mercury.position.set(7,0,0);

scene.add(mercury);

const mercuryOrbit = new THREE.Object3D();
scene.add(mercuryOrbit);
mercuryOrbit.position.set(-30,0,0);
mercuryOrbit.add(mercury);

const merPathGeometry  =  new THREE.RingGeometry(6.9, 7.05, 128);
const merPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const mercuryPath = new THREE.Mesh(merPathGeometry, merPathMaterial);
mercuryPath.rotation.x = -Math.PI / 2;
mercuryPath.position.set(-30, 0, 0);

scene.add(mercuryPath);


const venGeometry = new THREE.SphereGeometry(1.7,42,42)
const venMaterial = new THREE.MeshStandardMaterial({map:venText, roughness: 1, metalness:0 });
const venus = new THREE.Mesh(venGeometry, venMaterial);
venus.position.set(12,0,0);


scene.add(venus);

const venusOrbit = new THREE.Object3D();
scene.add(venusOrbit);
venusOrbit.position.set(-30,0,0);
venusOrbit.add(venus);

const venPathGeometry  =  new THREE.RingGeometry(11.9, 12.05, 128);
const venPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const venusPath = new THREE.Mesh(venPathGeometry, venPathMaterial);
venusPath.rotation.x = -Math.PI / 2;
venusPath.position.set(-30, 0, 0);

scene.add(venusPath);


const geometry = new THREE.SphereGeometry(1.7,42,42)
const material = new THREE.MeshStandardMaterial({map:texture, roughness: 1, metalness:0 });
const planet = new THREE.Mesh(geometry, material);
planet.position.set(18,0,0);

scene.add(planet);

const earthOrbit = new THREE.Object3D();
scene.add(earthOrbit);
earthOrbit.position.set(-30,0,0);
earthOrbit.add(planet);



const earthPathGeometry  =  new THREE.RingGeometry(17.9, 18.05, 128);
const earthPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const earthPath = new THREE.Mesh(earthPathGeometry, earthPathMaterial);
earthPath.rotation.x = -Math.PI / 2;
earthPath.position.set(-30, 0, 0);

scene.add(earthPath);


const marGeometry = new THREE.SphereGeometry(1.3,42,42)
const marMaterial = new THREE.MeshStandardMaterial({map:marText, roughness: 1, metalness:0 });
const mars = new THREE.Mesh(marGeometry, marMaterial);
mars.position.set(25,0,0);
scene.add(mars);


const marsOrbit = new THREE.Object3D();
scene.add(marsOrbit);
marsOrbit.position.set(-30,0,0);
marsOrbit.add(mars);



const marPathGeometry  =  new THREE.RingGeometry(24.9, 25.05, 128);
const marPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const marsPath = new THREE.Mesh(marPathGeometry, marPathMaterial);
marsPath.rotation.x = -Math.PI / 2;
marsPath.position.set(-30, 0, 0);

scene.add(marsPath);


const jupGeometry = new THREE.SphereGeometry(4.4,42,42)
const jupMaterial = new THREE.MeshStandardMaterial({map:jupText, roughness: 1, metalness:0 });
const jupiter = new THREE.Mesh(jupGeometry, jupMaterial);
jupiter.position.set(37,0,0);
scene.add(jupiter);

const jupOrbit = new THREE.Object3D();
scene.add(jupOrbit);
jupOrbit.position.set(-30,0,0);
jupOrbit.add(jupiter);



const jupPathGeometry  =  new THREE.RingGeometry(36.9, 37.05, 128);
const jupPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const jupiterPath = new THREE.Mesh(jupPathGeometry, jupPathMaterial);
jupiterPath.rotation.x = -Math.PI / 2;
jupiterPath.position.set(-30, 0, 0);

scene.add(jupiterPath);

const satGeometry = new THREE.SphereGeometry(4,42,42)
const satMaterial = new THREE.MeshStandardMaterial({map:satText, roughness: 1, metalness:0 });
const saturn = new THREE.Mesh(satGeometry, satMaterial);
saturn.position.set(50,0,0);

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

const satOrbit = new THREE.Object3D();
scene.add(satOrbit);
satOrbit.position.set(-30,0,0);
satOrbit.add(saturn);



const satPathGeometry  =  new THREE.RingGeometry(49.9, 50.05, 128);
const satPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const saturnPath = new THREE.Mesh(satPathGeometry, satPathMaterial);
saturnPath.rotation.x = -Math.PI / 2;
saturnPath.position.set(-30, 0, 0);

scene.add(saturnPath);

const uraGeometry = new THREE.SphereGeometry(4,42,42)
const uraMaterial = new THREE.MeshStandardMaterial({map:uranusText, roughness: 1, metalness:0 });
const uranus = new THREE.Mesh(uraGeometry, uraMaterial);
uranus.position.set(64,0,0);

scene.add(uranus);

const uranusOrbit = new THREE.Object3D();
scene.add(uranusOrbit);
uranusOrbit.position.set(-30,0,0);
uranusOrbit.add(uranus);


const uraPathGeometry  =  new THREE.RingGeometry(63.9, 64.05, 128);
const uraPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const uranusPath = new THREE.Mesh(uraPathGeometry, uraPathMaterial);
uranusPath.rotation.x = -Math.PI / 2;
uranusPath.position.set(-30, 0, 0);

scene.add(uranusPath);

const napGeometry = new THREE.SphereGeometry(4,42,42)
const napMaterial = new THREE.MeshStandardMaterial({map:napText, roughness: 1, metalness:0 });
const napturn = new THREE.Mesh(napGeometry, napMaterial);
napturn.position.set(85,0,0);

scene.add(napturn);

const napOrbit = new THREE.Object3D();
scene.add(napOrbit);
napOrbit.position.set(-30,0,0);
napOrbit.add(napturn);

const napPathGeometry  =  new THREE.RingGeometry(84.9, 85.05, 128);
const napPathMaterial = new THREE.MeshBasicMaterial({
    color: 0x667080,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 1.5
});

const naptunePath = new THREE.Mesh(napPathGeometry, napPathMaterial);
naptunePath.rotation.x = -Math.PI / 2;
naptunePath.position.set(-30, 0, 0);

scene.add(naptunePath);



const starGeometry = new THREE.BufferGeometry();
const starcount = 1500;

const starPositions = [];

for (let i = 0; i < starcount; i++){
    const  x = (Math.random() - 0.5 )* 400;
    const  y = (Math.random() - 0.5 )* 400;
    const  z = (Math.random() - 0.5 )* 400;

    starPositions.push(x,y,z);

}



starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starPositions, 3)
);


const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.3,
    transparent:true,
    opacity:0.87,
});


const cameraGoal = cam.position.clone();
const targetGoal = controls.target.clone();


const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

let foucusedPlanet = null;
const cameraOffset = new THREE.Vector3();

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
    earthOrbit.rotation.y += 0.010;
    marsOrbit.rotation.y +=  0.008;
    jupOrbit.rotation.y += 0.004;
    satOrbit.rotation.y += 0.003;
    uranusOrbit.rotation.y += 0.002	;
    napOrbit.rotation.y += 0.001;

if (foucusedPlanet) {
    const currentPosition = new THREE.Vector3();
    foucusedPlanet.getWorldPosition(currentPosition);
    targetGoal.copy(currentPosition);
    cameraGoal.copy(currentPosition).add(cameraOffset);

    cam.position.lerp(cameraGoal, 0.05);
    controls.target.lerp(targetGoal, 0.05);

    controls.update();
}

renderer.render(scene, cam);
}

animate();

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const clickablePlanets = [
    { mesh: mercury, name: "Mercury" },
    { mesh: venus, name: "Venus" },
    { mesh: planet, name: "Earth" },
    { mesh: mars, name: "Mars" },
    { mesh: jupiter, name: "Jupiter" },
    { mesh: saturn, name: "Saturn" },
    { mesh: uranus, name: "Uranus" },
    { mesh: napturn, name: "Neptune" },
];

renderer.domElement.addEventListener("click", (event) => {
    const rect = renderer.domElement.getBoundingClientRect();

    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, cam);

    const planetMeshes = clickablePlanets.map((item) => item.mesh);
    const hits = raycaster.intersectObjects(planetMeshes, true);

    if (hits.length > 0) {
        let clickedObject = hits[0].object;

        while (
            clickedObject.parent &&
            !clickablePlanets.some((item) => item.mesh === clickedObject)
        ) {
            clickedObject = clickedObject.parent;
        }

        const selectedPlanet = clickablePlanets.find(
            (item) => item.mesh === clickedObject
        );

        if (selectedPlanet) {
            const planetPosition = new THREE.Vector3();
            selectedPlanet.mesh.getWorldPosition(planetPosition);

            const direction = cam.position.clone()
                .sub(planetPosition)
                .normalize();

            cameraGoal.copy(planetPosition).add(direction.multiplyScalar(15));
            targetGoal.copy(planetPosition);

            foucusedPlanet = selectedPlanet.mesh;

            cameraOffset.copy(cam.position)
                .sub(planetPosition)
                .normalize()
                .multiplyScalar(15);

            targetGoal.copy(planetPosition);
            cameraGoal.copy(planetPosition).add(cameraOffset);

            window.showPlanet(selectedPlanet.name);
            const planetInfo = document.getElementById("planetInfo");
            if (planetInfo) {
                planetInfo.classList.add("active");
            }
        }
    }
});
