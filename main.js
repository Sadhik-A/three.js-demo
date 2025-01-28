// Import Three.js core components
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 1.Create the scene - container for all 3D objects, lights, and camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

//2. Create the camera - determines what part of the scene is visible
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight // Aspect ratio
);
camera.position.z = 5; // Move the camera away from the cube

//3.Create a cube geometry and material
const geometry = new THREE.BoxGeometry(1, 1, 1); // Cube shape
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color material
const cube = new THREE.Mesh(geometry, material); // Combine geometry and material into a mesh

//4. Add the cube to the scene
scene.add(cube);

//5. Create the WebGL renderer and attach it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
document.body.appendChild(renderer.domElement); // Append canvas to the document

// Add OrbitControls to allow mouse interaction
const controls = new OrbitControls(camera, renderer.domElement);

//6. Animation loop to render the scene and animate objects
function animate() {
  requestAnimationFrame(animate); // Call animate recursively
  controls.update();
  // Rotate the cube for some animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera); // Render the scene through the camera
}

animate();
