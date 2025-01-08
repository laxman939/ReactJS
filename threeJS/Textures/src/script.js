import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Canvas
const canvas = document.querySelector(".draw");
console.log("Three Basics", canvas);

// Scene
const scene = new THREE.Scene();

// LoadingManager - Tpo avoid initial loading issues
const loadingManager = new THREE.LoadingManager();
loadingManager.onStart = () => {
  console.log("onStart");
};
loadingManager.onLoad = () => {
  console.log("Loading . . .");
};
loadingManager.onProgress = () => {
  console.log("onProgress");
};
loadingManager.onError = () => {
  console.log("onError");
};

// textureLoader
const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load("/texture/Flappy_bg.png");
const texture2 = textureLoader.load("/texture/tech_img.jpeg");

// Resizing
window.addEventListener("resize", () => {
  // Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update Renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Object
const geometry = new THREE.SphereGeometry(0.9, 400, 132);
const material = new THREE.MeshBasicMaterial({
  map: texture2,
  // color: "#ff0000",
  wireframe: true,
});
// or
// material.map = colorTexture;
// material.color = new THREE.Color("green"); // need to add multiple colors with animation or with limited time
// material.transparent = true;
// material.opacity = 0.2;
// material.side = THREE.DoubleSide;
// material.visible = true;
// material.displacementMap = colorTexture;

const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
mesh.position.y = 0;
mesh.position.z = 0.2;
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(25, sizes.width / sizes.height);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  // canvas: canvas,
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// OrbitControls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const clock = new THREE.Clock();
const animate = () => {
  // GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  // Update Rotation on X Axis
  mesh.rotation.y = elapsedTime;
  // mesh.rotation.y = elapsedTime * Math.PI;

  // Renderer
  renderer.render(scene, camera);

  // RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
