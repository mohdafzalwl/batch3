//functional instantiation with shared methods
const animalMethods = {
	eat(amount) {
		console.log(`${this.name} is eating`);
		this.energy += amount;
	},
	sleep(length) {
		console.log(`${this.name} is slepping`);
		this.energy += length;
	},
	play(length) {
		console.log(`${this.name} is playing`);
		this.energy -= length;
	}
};
function Animal(name, energy) {
	let animal = Object.create(animalMethods);
	animal.name = name;
	animal.energy = energy;

	return animal;
}

const leo = Animal('leo', 7);
