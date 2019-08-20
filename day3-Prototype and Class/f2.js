function Animal(name, energy) {
	// let animal = Object.create(Animal.prototype);
	console.log('from the animal ', this);
	this.name = name;
	this.energy = energy;
	// return animal;
}

Animal.prototype.eat = function eat(amount) {
	console.log(this);
	console.log(`${this.name} is eating`);
	this.energy += amount;
};
Animal.prototype.sleep = function sleep(length) {
	console.log(`${this.name} is sleeping`);
	this.energy += length;
};
Animal.prototype.play = function play(length) {
	console.log(`${this.name} is playing`);
	this.energy -= length;
};

const leo = new Animal('leo', 7);
