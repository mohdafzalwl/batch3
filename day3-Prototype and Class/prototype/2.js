function doThing() {}
console.log(doThing.prototype); // {}
//************************** */
//prototypal instantiation
function Animal(name, energy) {
	// let animal = Object.create(Animal.prototype);
	console.log(this);
	this.name = name;
	this.energy = energy;
	// return animal;
}
Animal.prototype.eat = function(amount) {
	console.log(`${this.name} is eating`);
	this.energy += amount;
};
Animal.prototype.sleep = function(length) {
	console.log(`${this.name} is slepping`);
	this.energy += length;
};

Animal.prototype.play = function(length) {
	console.log(`${this.name} is playing`);
	this.energy -= length;
};

const leo = new Animal('Leo', 7);
const leo1 = new Animal('Leo1', 71);
