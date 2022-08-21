import { Mesh, MeshBasicMaterial, SphereGeometry, Vector3 } from "three";

class MassBall extends Mesh {
	public mass: number;
	public radius: number;

	public pos: Vector3;
	public vel: Vector3;
	public acc: Vector3;
	public force: Vector3;

	constructor(mass = 1, radius = 1, pos: Vector3 = new Vector3(0, 0, 0)) {
		const geometry = new SphereGeometry(radius);
		const material = new MeshBasicMaterial({ color: 0xff2323 });
		super(geometry, material);
		this.name = "massBall";
		this.mass = mass;
		this.radius = radius;
		this.pos = pos;
		this.vel = new Vector3();
		this.acc = new Vector3();
		this.force = new Vector3();
	}
}

export { MassBall };
