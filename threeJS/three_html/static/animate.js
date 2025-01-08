// Animation
import * as THREE from "three";
// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 0.8;
// scene.add(mesh);

// Mesh - 2
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "green" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;

group.add(mesh, meshT);
group.position.x = 1;
scene.add(group);

// AxesHelper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // 1, 2000 are default values
camera.position.z = 4;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl"); // select the canvas
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

// const animate = () => {
//   meshT.rotation.x += 0.01;
//   meshT.rotation.y += 0.01;
//   meshT.rotation.x += 0.01;

//   renderer.render(scene, camera);
//   window.requestAnimationFrame(animate);
// };
// animate();

// Using clock class - to overcome bad performance issues because of fps(different devices has different fps)
// clock class

const clock = new THREE.Clock();
const animate = () => {
  // GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  // Update Rotation on X Axis
  meshT.rotation.x = elapsedTime;
  mesh.rotation.y = elapsedTime * Math.PI;

  // Renderer
  renderer.render(scene, camera);

  // RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
