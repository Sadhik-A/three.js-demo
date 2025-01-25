// Import Three.js core components
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 1.Create the scene - container for all 3D objects, lights, and camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//2. Create the camera - determines what part of the scene is visible
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.z = 5; // Move the camera away from the cube

//3. Create the WebGL renderer and attach it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
document.body.appendChild(renderer.domElement); // Append canvas to the document

//4.Create a cube geometry and material
const geometry = new THREE.BoxGeometry(); // Cube shape
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color material
const cube = new THREE.Mesh(geometry, material); // Combine geometry and material into a mesh

//5. Add the cube to the scene
scene.add(cube);

// Add OrbitControls to allow mouse interaction
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth controls
controls.dampingFactor = 0.05; // Controls the damping speed
controls.screenSpacePanning = false; // Disable panning
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

//6. Render the scene

//6. Animation loop to render the scene and animate objects
function animate() {
  requestAnimationFrame(animate); // Call animate recursively
  controls.update(); // Update controls
  // Rotate the cube for some animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera); // Render the scene through the camera
}
animate();
