import { Object3D, Scene } from "three";
import { Environment } from "./environment";
import { MassBall } from "./MassBall";

class Simulation {
	public env: Environment;
	public scene: Scene;

	public running: boolean;

	constructor(env: Environment, scene: Scene) {
		this.env = env;
		this.scene = scene;
	}

	public step() {
		this.scene.children
			.filter((obj: Object3D) => obj.name === "massBall")
			.forEach((massBall: MassBall) => {
				massBall.force.add(this.env.gravity);

				this.env.integrator(massBall, this.env.dt);
			});
	}
}

export { Simulation };
