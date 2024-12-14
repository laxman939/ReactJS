import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");
console.log("Three Basics", canvas);

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: "#ff0000",
  //   wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height);
camera.position.z = 6;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  // canvas: canvas,
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
