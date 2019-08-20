//ES6
class Animal {
	constructor(name, energy) {
		//properties
		this.name = name;
		this.energy = energy;
	}
	eat(amount) {
		console.log(`${this.name} is eating`);
		this.energy += amount;
	}
	sleep(length) {
		console.log(`${this.name} is sleeping`);
		this.energy += length;
	}
	play(length) {
		console.log(`${this.name} is playing`);
		this.energy -= length;
	}
}
const leo = new Animal('leo', 7);
const scoop = new Animal('scoop', 10);
