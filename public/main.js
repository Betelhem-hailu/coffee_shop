import './style.css';
import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer();
const starGeo = new THREE.BufferGeometry();
var stars;

function init() {
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    const starCount = 6000;

    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
        const x = Math.random() * 600 - 300;
        const y = Math.random() * 600 - 300;
        const z = Math.random() * 600 - 300;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }

    const velocities = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        velocities[i] = 0;
    }
    const accelerations = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
        accelerations[i] = 0.02;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1));
    starGeo.setAttribute('acceleration', new THREE.BufferAttribute(accelerations, 1));
    let sprite = new THREE.TextureLoader().load('star.png');
    const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
    });
    stars = new THREE.Points(starGeo, starMaterial);
    scene.add(stars);
    animate()
}

function onWindowResize(){
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
    starGeo.attributes.position.array.forEach((_, i) => {
        const velocity = starGeo.attributes.velocity.array[i];
        const acceleration = starGeo.attributes.acceleration.array[i];

        starGeo.attributes.velocity.array[i] += acceleration;
        starGeo.attributes.position.array[i * 3 + 1] -= velocity;

        if (starGeo.attributes.position.array[i * 3 + 1] < -200) {
            starGeo.attributes.position.array[i * 3 + 1] = 200;
            starGeo.attributes.velocity.array[i] = 0;
        }
    });

    starGeo.attributes.position.needsUpdate = true;
    starGeo.attributes.velocity.needsUpdate = true;
    stars.rotation.y += 0.002;

    onWindowResize();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

}

init();