//  functional instantiation
function Animal(name, energy) {
	let animal = {};
	animal.name = name;
	animal.energy = energy;
	animal.eat = function(amount) {
		console.log(`${this.name} is eating`);
		this.energy += amount;
	};
	animal.sleep = function(length) {
		console.log(`${this.name} is slepping`);
		this.energy += length;
	};
	animal.play = function(length) {
		console.log(`${this.name} is playing`);
		this.energy -= length;
	};

	return animal;
}

const leo = Animal('LEO', 7);

const tiger = Animal('tiger', 10);
