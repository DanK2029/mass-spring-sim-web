import { Vector3 } from "three";
import { MassBall } from "./massBall";

type integratorType = (massBall: MassBall, dt: number) => void;

function explicitEuler(massBall: MassBall, dt: number): void {
	const newAcc: Vector3 = massBall.force.divideScalar(massBall.mass);
	const newVel: Vector3 = massBall.vel.add(massBall.acc.multiplyScalar(dt));
	const newPos: Vector3 = massBall.pos.add(massBall.vel.multiplyScalar(dt));

	massBall.acc = newAcc;
	massBall.vel = newVel;
	massBall.pos = newPos;
	massBall.position.set(newPos.x, newPos.y, newPos.z);

	massBall.force.set(0, 0, 0);
}

export { integratorType, explicitEuler };
