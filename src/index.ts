import { PerspectiveCamera, Scene, Vector3, WebGLRenderer } from "three";

import { Environment } from "./Physics/environment";
import { explicitEuler } from "./Physics/integrator";
import { MassBall } from "./Physics/massBall";
import { Simulation } from "./Physics/simulation";

const environment: Environment = {
	gravity: new Vector3(0, -9.8, 0),
	integrator: explicitEuler,
	dt: 0.075,
};

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const scene = new Scene();

scene.add(new MassBall());
const sim = new Simulation(environment, scene);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
	requestAnimationFrame(animate);
	sim.step();
	renderer.render(scene, camera);
}
animate();
