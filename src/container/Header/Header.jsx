import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// import { SubHeading } from '../../components';
// import { images } from '../../constants';
import './Header.css';

const Header = () => {
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
            directionalLight.position.set(0, 1, 0);
            directionalLight.castShadow = true;
            scene.add(directionalLight);

            camera.rotation.y = 45 / 180 * Math.PI;
            camera.position.x = 2.5;
            camera.position.y = 0.2;
            camera.position.z = 2.5;
            renderer.setSize(window.innerWidth/2, window.innerHeight/2);
            mountRef.current.appendChild(re    distnderer.domElement);

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
            loader.load('./paper_cup/scene.gltf', function (gltf) {
                coffee = gltf.scene.children[0];
                coffee.scale.set(0.007, 0.007, 0.007);
                scene.add(gltf.scene);
                animate();
            }, undefined, function (error) {
                console.log(error);
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            if (coffee) {
                // coffee.rotation.x += 0.01;
                // coffee.rotation.y += 0.01;
                coffee.rotation.z += 0.02;
            }
            renderer.render(scene, camera);
        }

        init();
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            window.removeEventListener('resize', onWindowResize, false);
        };
    }, []);

return (
  // <div style={{position: 'relative', width: '100%', height: '100%' }}>
  //           <div ref={mountRef}></div>
  <div className="app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chase the new flavour" /> */}
      <h1 className="app__header-h1">Drink deep. Discover the compassion in every cup.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Every cup is not just a beverage; it's a journey to the heart of Ethiopia.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

  <div ref={mountRef}></div>
  </div>
  // </div>
);
};

export default Header;