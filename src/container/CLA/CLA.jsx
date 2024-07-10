import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import './cla.css';

const CLA = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        var hlight, directionalLight;


        function init() {
            scene.background = null;

            hlight = new THREE.AmbientLight(0x404040, 100);
            scene.add(hlight);

            directionalLight = new THREE.DirectionalLight(0xffffff, 100);
            directionalLight.position.set(0, 0, 0);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            camera.rotation.y = 45 / 180 * Math.PI;
            camera.position.x = 2.5;
            camera.position.y = 0;
            camera.position.z = 2.5;
            renderer.setSize(window.innerWidth/2, window.innerHeight/2);
            mountRef.current.appendChild(renderer.domElement);

            objectSetup();
            window.addEventListener('resize', onWindowResize, false);
        }

        let coffee = null

           function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

       

        function objectSetup() {
         const loader = new GLTFLoader();
            loader.load('./cup/scene.gltf', function (gltf) {
                coffee = gltf.scene.children[0];
                coffee.scale.set(0.4, 0.4, 0.4);
                coffee.rotateY(1.6);
                coffee.rotateX(0.8);

                scene.add(gltf.scene);
                animate();
            }, undefined, function (error) {
                console.log(error);
            });
        }

        function animate() {
            requestAnimationFrame(animate);

            if (coffee) {
                coffee.rotation.z += 0.01;
            }

            renderer.render(scene, camera);
        }

        init();
        return () => {
            window.removeEventListener('resize', onWindowResize);
            mountRef.current.removeChild(renderer.domElement);
            
        };
    }, []);


    return (
        <div className="app__bg app__wrapper section__padding" id="cla">
            <h1 className="headtext__cormorant" style={{width: '100%'}}>
            Welcome to the journey! 
            </h1>
            <div ref={mountRef}></div>
            <h1 className="headtext__cormorant" style={{width: '100%'}}>
            We're glad to have you along for the ride.
            </h1>
            </div>
    );
}

export default CLA;