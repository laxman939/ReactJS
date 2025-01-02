import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");
console.log("Three Basics", canvas);

// Scene
const scene = new THREE.Scene();

// textureLoader
const textureLoader = new THREE.TextureLoader();
const colorTexture = textureLoader.load("/texture/Flappy_bg.png");
console.log("colorTexture", colorTexture);

// Object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  // map: colorTexture,
  color: "#ff0000",
  //   wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = -0.6;
mesh.position.y = 0.2;
mesh.position.z = 0.2;
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
