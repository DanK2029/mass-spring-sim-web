import { Vector3 } from "three";
import { integratorType } from "./integrator";

interface Environment {
	gravity: Vector3;
	dt: number;
	integrator: integratorType;
}

export { Environment };
